---
uuid: "1e223cab-bca2-4b3b-a75a-71f158c90cba"
date: 2022-09-26
created: 2022-09-26T08:55:23.886Z
aliases:
  -
title: SvelteKit Server-Side Rendering (SSR) with @urql/svelte
published: true
modified:
description: Learn why server-side rendering (SSR) using urql as a GraphQL client is not as straightforward as you might think and how to do it anyway.
cover_image: "https://i.imgur.com/5DBIbbT.png"
content_tags: ["urql", "sveltekit", "SSR", "graphql"]
---

In this blog post, I will explain why server-side rendering with the [urql](https://formidable.com/open-source/urql/docs/api/svelte/) GraphQL library is not as straightforward to do with SvelteKit, and how I solved this in my project anyway.

Server-side rendering (SSR) is one of the great features of SvelteKit. I will try to keep this blog post short and will therefore not explain what server-side rendering is and why you should take advantage of it _(you really should!)_. If you want to know more about SSR you can take a look at this article: [A Deep Dive into Server-Side Rendering (SSR) in JavaScript](https://towardsdev.com/server-side-rendering-srr-in-javascript-a1b7298f0d04).

## Background - SSR in SvelteKit

SvelteKit implements SSR by providing a [`load` function](https://kit.svelte.dev/docs/load) for every layout and page component. If a page or layout needs to perform some asynchronous operation, this should be done inside of this load function. SvelteKit executes this function asynchronously on the server side as well as on the client side and the return value of this function is assigned to the `data` prop of the associated component. Usually, this asynchronous operation is loading data from an external service, like in the case of this blog post a GraphQL server.
You can of course load data directly in the component, but SvelteKit will not wait for this to complete when doing SSR, and the resulting HTML will not include the loaded data.

## Background - @urql/svelte

The urql library allows us to easily issue GraphQL queries and mutations. Some of the functionality it has to make our lives easier include:

- Reloading a query when a query variable changes
- Reloading a query after a mutation that touches the same data as the query

We want to keep these features, even when using urql when doing SSR.

## The Problem

When implementing SSR in my project, I ran into two problems. I couldn't find any documentation or any articles solving them, so I decided to write down my solutions to those problems in this blog post.

### Problem 1 - Svelte and urql Reactivity

Let's say we have the following load function, which executes a GraphQL query to load a list of red cars:

```js
// src/routes/car/+page.js

/** @type {import('./$types').PageLoad} */
export function load(event) {
  const client = createClient({
    url: config.url,
    fetch: event.fetch,
  });

  const carColor = "red";

  const cars = client
    .query(carsQuery, {
      color: carColor,
    })
    .toPromise()
    .then((c) => c.data?.car);

  return {
    cars,
  };
}
```

This example uses the urql method `client.query` to start a query to get us a list of cars with a red colour (The GraphQL query is not shown but the exact query is not important for this example).
The client gets a [special fetch function](https://kit.svelte.dev/docs/load#input-methods-fetch) from the event which has a few nice properties, like preventing a second network request on the client side if that same request was just issued on the server-side.

Since the query code is now located in the load function and not in a svelte component, there is no way to easily change the `carColor` and have urql automatically reload the query. The only way to change the variable is to set the value as a query parameter and read that from the `event` argument. This however means that we have to refresh the whole page just to reload this query.

The other thing urql does for us, reloading the query when we do a mutation on the same data, will not work with the above code either.

### The solution: A query in the load function and a query in the component

To fix those two drawbacks we have to add the same query as in the load function to our component code as well. Unfortunately, this means when a user loads the page, it sends a request from the client side, even though the same request got sent from the server side already.

I created a small wrapper function `queryStoreInitialData` that creates the query inside of the component and intelligently switches from the (possibly stale) data from the load function to the new data. Using this wrapper, the page or layout might look as follows:

```svelte
<script>
  import { queryStoreInitialData } from "@/lib/gql-client"; // The helper function mentioned above
  import { getContextClient } from "@urql/svelte";
  import { carsQuery } from "./query"; // The query

  export let data;

  $: gqlStore = queryStoreInitialData(
    {
      client: getContextClient(),
      query: carsQuery,
    },
    data.cars
  );
  $: cars = $gqlStore?.data?.car;
</script>

<div>
  <pre>
		{JSON.stringify(cars, null, 2)}
	</pre>
</div>
```

1. The native `queryStore` function gets replaced with the wrapper function.
2. The initial value of the query is supplied to the wrapper

Unfortunately, we can not return the query result from the load function directly like this:

```js
const result = await client.query(cars, {}).toPromise();

return {
  cars: toInitialValue(result),
};
```

This results in the following error:

```stacktrace
Cannot stringify a function (data.events.operation.context.fetch)
Error: Cannot stringify a function (data.events.operation.context.fetch)
    at render_response (file:///app/node_modules/@sveltejs/kit/src/runtime/server/page/render.js:181:20)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async render_page (file:///app/node_modules/@sveltejs/kit/src/runtime/server/page/index.js:276:10)
    at async resolve (file:///app/node_modules/@sveltejs/kit/src/runtime/server/index.js:232:17)
    at async respond (file:///app/node_modules/@sveltejs/kit/src/runtime/server/index.js:284:20)
    at async file:///app/node_modules/@sveltejs/kit/src/exports/vite/dev/index.js:406:22
```

This is because the query result contains data that is not serializable.
To fix this I created the `toInitialValue` function, which deletes all non-serializable elements from the result. The load function now looks like follows;

```js
// src/routes/car/+page.js
import { createServerClient, toInitialValue } from "@/lib/gql-client";
import { parse } from "cookie";
import { carsQuery } from "./query";

/** @type {import('./$types').PageServerLoad} */
export const load = async (event) => {
  const client = createClient({
    url: config.url,
    fetch: event.fetch,
  });

  const result = await client.query(cars, {}).toPromise();

  return {
    cars: toInitialValue(result),
  };
};
```

### Problem 2 - Authentication

We will look at the same `load` function as [[#Problem 1 - Svelte and urql Reactivity]]: the function creates a urql client with the fetch function from the event object and uses this client to send a query.

Sometimes however the GraphQL API requires authentication in the form of a cookie to allow access.

Unfortunately, the [fetch function that we get from the load event](https://kit.svelte.dev/docs/load#input-methods-fetch) will only pass the cookies on if the requested domain is the same as the base domain or a more specific subdomain of it. This means if your SvelteKit site runs on `example.com` and your GraphQL server runs on `gql.example.com` then the cookies will get forwarded and everything is fine. This however is, in my experience, often not the case. Either you might use an external service for your GraphQL API or you host it yourself and want to use its internal domain.

The only way to pass the cookies on to the GraphQL server, in this case, is by manually setting the cookie header when creating the urql client. This however forces us to use the server-only load function, as we do not have access to the cookie header in the normal load function.

The new code now looks like this:

```js
// /src/routes/car/+page.server.js

/** @type {import('./$types').PageServerLoad} */
export function load(event) {
  const client = createClient({
    url: config.url,
    fetch,
    fetchOptions: {
      credentials: "include",
      headers: {
        // inject the cookie header
        // FIXME: change the cookie name
        Cookie: `gql-session=${event.cookies.get("gql-session")}`,
      },
    },
  });

  const cars = client.query(carsQuery, {}).toPromise();

  return {
    cars: toInitialValue(result),
  };
}
```

To keep the size of the load functions across my codebase smaller I created a small wrapper function `createServerClient`:

```js
// /src/routes/car/+page.server.js

/** @type {import('./$types').PageServerLoad} */
export function load(event) {
  const client = createServerClient(event.cookies);

  const cars = client.query(carsQuery, {}).toPromise();

  return {
    cars: toInitialValue(result),
  };
}
```

## The Code

Below you can find the three functions `createServerClient`, `queryStoreInitialData` and `toInitialValue` that we used above:

```js
// /src/lib/gql-client.js

import { browser } from "$app/environment";
import { urls } from "@/config";
import { createClient, queryStore } from "@urql/svelte";
import { derived, readable } from "svelte/store";

/**
 * Helper function to create an urql client for a server-side-only load function
 *
 *
 * @param {import('@sveltejs/kit').Cookies} cookies
 * @returns
 */
export function createServerClient(cookies) {
  return createClient({
    // FIXME: adjust your graphql url
    url: urls.gql,
    fetch,
    // FIXME: if you don't need to authenticate, delete the following object:
    fetchOptions: {
      credentials: "include",
      headers: {
        // FIXME: if you want to set a cookie adjust the cookie name
        Cookie: `gql-session=${cookies.get("gql-session")}`,
      },
    },
  });
}

/**
 * Helper method to send a GraphQL query but use the data from the SvelteKit load function initially.
 *
 *
 * @param {any} queryArgs
 * @param {any} initialValue
 * @returns
 */
export function queryStoreInitialData(queryArgs, initialValue) {
  if (!initialValue || (!initialValue.error && !initialValue.data)) {
    throw new Error("No initial value from server");
  }

  let query = readable({ fetching: true });
  if (browser) {
    query = queryStore(queryArgs);
  }

  return derived(query, (value, set) => {
    if (value.fetching) {
      set({ ...initialValue, source: "server", fetching: true });
    } else {
      set({ ...value, source: "client" });
    }
  });
}

/**
 * Make the result object of a urql query serialisable.
 *
 *
 * @template T
 * @param {Promise<import('@urql/svelte').OperationResult<T, any >>|import('@urql/svelte').OperationResult<T, any >} result
 * @returns {Promise<{fetching:false, error: undefined | {name?: string, message?: string; graphQLErrors?: any[]; networkError?: Error; response?: any;}, data: T|undefined}>}
 */
export async function toInitialValue(result) {
  const { error, data } = await result;

  // required to turn class array into array of javascript objects
  const errorObject = error ? {} : undefined;
  if (errorObject) {
    console.warn(error);
    errorObject.graphQLErrors = error?.graphQLErrors?.map((e) => ({ ...e }));
    errorObject.networkError = { ...error?.networkError };
    errorObject.response = { value: "response omitted" };
  }

  return {
    fetching: false,
    error: { ...error, ...errorObject },
    data,
  };
}
```

[Link to the Gist](https://gist.github.com/Tiim/1adeb4d74ce7ae09d0d0aa4176a6195d)

## End remarks

Even though I think this solution is not too bad, I wish @urql/svelte would implement a better way to handle SSR with sveltekit. I posted a [question on the urql GitHub discussions board](https://github.com/FormidableLabs/urql/discussions/2703), but I have not gotten any response yet.

> [!INFO]
> This article was written with `@svelte/kit` version `1.0.0-next.499` and `@urql/svelte` version `3.0.1`.
> I will try to update this article as I update my codebase to newer versions.

If this post helped you, or you found a better or different way to solve SSR with urql, please let me know in the comments, write me an email or tag me on twitter [@TiimB](https://twitter.com/TiimB).

%%

## 📎 Related

- [[Blog Posts]]
- [[Svelte (Library)|Sveltekit]]
- [[urql (Library)]]

## 📇 Additional Metadata

- 🗂 Type:: #type/content/blog-post
- 📝 Status:: #status/in-progress
- 🔐 Visibility::
- 👥 Team::
- 🗨 Language: #lang/en

**Personal**

- 👍 Recommended By::
- 🔮 Inspired By::
- 👨‍🎓 Lecturer::
- 📕 Author:: [[@Tim Bachmann]]
