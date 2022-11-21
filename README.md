# Tim's Personal Website

> [tiim.ch](https://tiim.ch/)
> Powered by [sveltekit](https://kit.svelte.dev), markdown, and my [go-comment-api](https://github.com/Tiim/go-comment-api).

## Content

Stored int the [content](/content/) folder:

- `assets`: contains images.
- `blog`: contains full blog posts, articles.
- `metadata`: contains special markdown files that are used in components on the site.
- `mf2`: notes, replies, likes and similar shortform non-exposed content.
- `projects`: projects, products, apps and scripts.
- `tags`: tags with extra descriptions.

### Frontmatter

```yml
---
uuid: # string, uuid of the item (optional)
title: # string, title of the item, will be shown as a h1 tag (optional)
published: # boolean, true if this item should be shown (optional, default false)
description: # string, short summary of the item (optional)
content_tags: # array<string>, list of tags (optional)
date: # date-time (iso), published date and time, (required)
modified: # date-time (iso), date-time of last modification (optional)
cover_image: # string, relative or absolute url to image file, (optional)
links: # array<url>, list of links to show at the top of the page, (optional)
reply_to: # url, the url this page is a reply to, (optional)
like_of: # url, the url this page is a `like` of, (optional)
---
```

## Developing

```bash
npm run dev
```

## Building

```bash
npm run build
npm run preview
```
