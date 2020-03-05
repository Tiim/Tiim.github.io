---
title: How to write optional filters in SQL
published: true
description: A simple way to filter by optional values in SQL
tags: postgres, sql, mysql
---

## The problem

Let's say you have a rest API with the following endpoint that returns all of the books in your database:

```rest
GET /book/
```

Your SQL query might look like something like this

```sql
SELECT *
FROM books
```

Sometimes you want to only list books, for example, from a specific author. How do we do this in SQL?

## Naive solution: String concatenation ✂

One way would be to concatenate your sql query something like this:

```js
const arguments = [];
const queryString = "SELECT * FROM books WHERE true";
if (authorFilter != null) {
  queryString += "AND author = ?";
  arguments.push(authorFilter);
}
db.query(queryString, arguments);
```

I'm not much of a fan of manually concatenating strings.

## The coalesce function 🌟

Most Databases have the function `coalesce` which accepts a variable amount of arguments and returns the first argument that is not null.

```sql
-- Examle
SELECT coalesce(null, null, 'dev.to', null, '@TiimB') as example;

-- Will return

example
---------
dev.to
```

But how will this function help us?

## Optional filters with the coalesce function

```sql
SELECT *
FROM books
WHERE
  author = coalesce(?, author);
```

If the filter value is null the coalesce expression will resolve to `author`
and the comparison `author = author` will be true.

If on the other hand the value is set for example to Shakespeare then the author will be compared to Shakespeare.

I came across this way to implement optional filters only recently. If you have a more idiomatic way to do this let me know please ✨

If you liked this post please follow me on here or on Twitter under [@TiimB](https://twitter.com/TiimB) 😎
