# Tim's Personal Website

> [tiim.ch](https://tiim.ch/)
> Powered by [sveltekit](https://kit.svelte.dev), markdown, and [IndieGo](https://github.com/Tiim/IndieGo), my project to join the indieweb.

## Content

Stored int the [content](/content/) folder:

- `assets`: contains images.
- `blog`: contains full blog posts, articles.
- `metadata`: contains special markdown files that are used in components on the site.
- `mf2`: notes, replies, likes and similar shortform non-exposed content.
- `projects`: projects, products, apps and scripts.
- `tags`: tags with extra descriptions.

### Frontmatter

All frontmatter properties are optional unless marked as required.

#### Core Properties (Used by the site)

```yml
---
# Basic metadata
uuid: # string, unique identifier for the item
title: # string, title shown as h1 (for blog/projects/pages)
published: # boolean, whether to show this item (default: false, always true for mf2/)
description: # string, short summary (used in meta tags and cards)
content_tags: # array<string>, list of tags
date: # date-time (iso), published date and time (required for published content, must include time after 2023-01-29)
modified: # date-time (iso), last modification date

# Display
cover_image: # string, relative or absolute URL to image file
cover_image_txt: # string, caption/alt text for the cover image
links: # array<url>, links to show at the top of the page

# IndieWeb properties (for notes, replies, likes, reposts)
in_reply_to: # object, {url, name?, author?: {name}} - the post this is replying to
like_of: # object, {url, name?, content?} - the post this is a like of
repost_of: # object, {url, name?} - the post this is a repost/share of
rsvp: # string, RSVP response: "yes", "no", "maybe", or "interested"
syndication: # string or array<url>, syndication URLs where this is also published
photos: # array<{url}>, photos associated with this post
photo: # object, {url} - single photo
---
```

#### Additional Properties (Not used by site, may be used by other tools)

These properties are ignored by the site but may be used by Obsidian or other tools:

```yml
---
aliases: # array<string>, alternative names (Obsidian)
created: # date-time, creation date (Obsidian - site uses 'date' instead)
name: # string, alternative to 'title' in some mf2 posts
share: # boolean, sharing status (Obsidian)
raw_data: # object, micropub raw data
---
```

#### Deprecated Properties

- `cover_caption` - use `cover_image_txt` instead
- `reply_to` - use `in_reply_to` instead

## Developing

```bash
npm run dev
```

## Building

```bash
npm run build
npm run preview
```
