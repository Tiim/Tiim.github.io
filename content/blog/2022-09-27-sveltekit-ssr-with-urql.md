---
uuid: "1e223cab-bca2-4b3b-a75a-71f158c90cba"
date: 2022-09-26
created: 2022-09-26T08:55:23.886Z
aliases:
  -
title: SvelteKit Server Side Rendering with @urql/svelte
published: false
modified:
description: Learn why server side rendering (SSR) using urql as a GraphQL client is not as straing forward as you might think and how to do it anyway.
cover_image: ""
content_tags: ["urql", "sveltekit", "SSR", "graphql"]
---

Server side rendering is one of the great features of SvelteKit. I will try to keep this blog post short and will therefore not explain what server side rendering is and why you should take advantage of it (you really shoud!). If you want to know more about SSR you can take a look at this article: [A Deep Dive into Server-Side Rendering (SSR) in JavaScript](https://towardsdev.com/server-side-rendering-srr-in-javascript-a1b7298f0d04).

SvelteKit implements SSR by providing a [`load` function](https://kit.svelte.dev/docs/load) for every layout and page component. If a page or layout needs to perform some asynchronous operation, this should be done inside of this load function. It will be executed on the server as well as on the client and the return value of this function is assigned to the `data` prop of the associated component. Usually this asynchronous operation is loading data from an external service, like in this case a GraphQL server.
You can of course load data directly in the component script tag, but SvelteKit will not wait for this to complete.

## The Problem

So this all sounds logical and good, so why is server side rendering with the GraphQL client urql and it's svelte binding [@urql/svelte](https://formidable.com/open-source/urql/docs/api/svelte/) tricky? Can we not just perform the query in the load function, and that's it? Well.. I thought so too, but it turns out this is a little bit more involved than one might expect.

### Problem 1 - Reactivity

Let's say we have the following load function:

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

This example uses the default urql method `client.query` to start a query to get us a list of cars with a red colour (The GraphQL query is not shown but the exact query is not important and depends on the server implementation anyway).
The client gets a [special fetch function](https://kit.svelte.dev/docs/load#input-methods-fetch) from the event which has a few nice properties, like preventing a second network request on the client side if that same request was just issued on the server side.

What if we now want to let the user change the colour on the page? We can just set this colour as a search parameter get it from the event object, but that means we have to refresh the whole page just to re-fetch a few cars. This would help us refetch the cars if the selected color changes, but it would not help us re-executing the query when we do a GraqhQL mutation that modifies the cars. In that case we

Another method to be able to change the colour is to add the same query to our component code and just use svelte's reactivity system to re-launch the request when the colour changes. This would prevent having to reload the whole page, but would mean we send a second request on the client side, even though we just sent the same request from the server side.

### Problem 2 - Authentication

The [fetch function that we get from the load event](https://kit.svelte.dev/docs/load#input-methods-fetch) will pass cookies on only if the requested domain is the same as the base domain or a more specific subdomain of it. This means if your SvelteKit site runs on example.com and your GraphQL server runs on gql.example.com then the cookies will get forwarded. This however is, in my experience, often not the case. Either you might use an external service for your GraphQL api or you host it yourself and want to use the internal domain.

For example the web app I'm currently working on has a GraphQL api that depends on cookies and both the SvelteKit app, as well as the GraphQL api are hosted on the same machine in docker.

Luckily SvelteKit does not leave us hanging here: a server-only load function doesn't have access to a custom fetch function, but it has access to the cookies directly. And since our client side load function was not being executed, as mentioned above, it really doesn't matter that the load function is server only.

The new code now looks like this:

```js
// /src/routes/car/+page.server.js
/** @type {import('./$types').PageServerLoad} */
export function load(event) {
	const client = createClient({
		url: config.url,
		fetch,
		fetchOptions: {
			credentials: 'include',
			headers: {
				Cookie: `gql-session=${event.cookies.get('gql-session')}`,
			},
		},
	});

	cons carColor = 'blue';

	const cars = client
		.query(carsQuery, {
			color: carColor,
		})
		.toPromise()
		.then(c => c.data?.car);

	return {
		cars,
	};
}
```

> [!INFO]
> This article was written with `@svelte/kit` version `1.0.0-next.499` and `@urql/svelte` version `3.0.1`.
> I will try to update this article as I update my codebase to newer versions.

- [x] how is ssr implemented in SvelteKit
- [x] Why does urql currently not support SSR
- [ ] How could urql support ssr in sveltekit
- [x] How can we implement ssr anyway
- [ ] debugging with the network tabs
  - parent layouts must be ssr'd too

%%

## 📎 Related

-

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
- 📕 Author::
