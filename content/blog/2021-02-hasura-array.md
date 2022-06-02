---
title: Using PostgreSQL Arrays in a Hasura Mutation
published: false
description: Until Hasura supports PostgreSQL arrays as a first class citizen, it is not straight forwart to use such an array in a GraphQL mutation.
content_tags: [PostgreSQL, Hasura, quick-tip, dev]
date: 2021-02-17
cover_image: "/assets/2021-02-hasura-array.png"
---

```js
const myArray = ["Alice", "Bob"];

const query = gql`
mutation ($array: _text!)) {
  update_array(_set: {array: $array}, where: {...}) {
    returning {
      array
    }
  }
}`;

const variables = {
  array: JSON.stringify(myArray).replace(/^\[/, "{").replace(/\]$/, "}"),
};
```
