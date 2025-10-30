# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website/blog built with SvelteKit that supports IndieWeb protocols. The site is a static site generator that processes markdown content and deploys to GitHub Pages at tiim.ch.

## Common Commands

### Development

```bash
npm run dev          # Start dev server (copies assets and runs vite dev)
npm run build        # Production build (copies assets and runs vite build)
npm run preview      # Preview production build
```

### Code Quality

```bash
npm run lint         # Run prettier check and eslint
npm run format       # Format code with prettier
```

### Deployment

- Main branch: `source` (development branch)
- Deploy branch: `master` (GitHub Pages)
- Deployment is automated via GitHub Actions on push to `source` branch
- Manual deployment: `./deploy.sh` (lints, builds, and force-pushes to master)

## Architecture

### Content System

The content system is the core of the site, loading and processing markdown files from the `content/` directory:

- **Content loader** (`src/lib/content.js`): `getContent()` function loads all markdown content into memory at build time and caches it (except in dev mode). Returns a unified content object with:
  - `allBlogPosts`, `pages`, `projects`, `notes` - categorized content arrays
  - `contentMap` - slug-to-content lookup map
  - `tagsMap` - tag-to-posts mapping
  - `comments` - loaded from external API (comments.tiim.ch or localhost:8080 in dev)
  - `mf2` - microformats2 metadata from content/mf2.json
  - `queryContent(slug)` - helper to get content by slug

- **Markdown processor** (`src/lib/markdown.js`): `process(fileName)` converts markdown files using a unified/remark/rehype pipeline:
  - Parses frontmatter (YAML)
  - Custom remark plugins: absoluteLink, hideWikilink, highlight
  - Custom rehype plugins: callout
  - Adds external link attributes (nofollow, noopener, noreferrer)
  - Generates microformats2 markup for IndieWeb post types (reply, like, repost, rsvp, photo, note)
  - Enforces date+time requirement for posts after 2023-01-29

### Content Structure

Content is organized by type in `content/` folder:

- `blog/` - Full blog posts/articles (sorted by date, type: "article")
- `projects/` - Project descriptions (type: "article")
- `pages/` - Standalone pages (e.g., uses, links)
- `mf2/` - Short-form IndieWeb content: notes, replies, likes, reposts (auto-published, type determined by frontmatter)
- `metadata/` - Special markdown for site components (footer, about) with mf2 variable substitution
- `tags/` - Tag descriptions
- `assets/` - Images (copied to static/assets/ on build)

### Frontmatter Fields

All content supports these frontmatter fields:

- `uuid`, `title`, `published` (boolean, default false except mf2), `description`, `content_tags` (array)
- `date` (required for published content, must include time after 2023-01-29), `modified`
- `cover_image`, `links` (array of URLs shown at top)
- IndieWeb: `in_reply_to`, `like_of`, `repost_of`, `rsvp`, `syndication`, `photos`

### Routing

SvelteKit file-based routing in `src/routes/`:

- `/` - Homepage
- `/blog/[slug]` - Blog posts from content/blog/
- `/projects/[slug]` - Projects from content/projects/
- `/pages/[page_slug]` - Pages from content/pages/
- `/mf2/[...slug]` - Notes from content/mf2/ (supports nested paths)
- `/tags/[slug]` - Tag listing pages
- `/blog/rss.xml` - RSS feed for blog
- `/full-rss.xml` - Full RSS feed (all content)

All routes use `+page.server.js` to load content via `getContent()` at build time.

### Custom Markdown Plugins

Located in `src/lib/markdown/`:

- `remarkAbsoluteLink.js` - Converts relative markdown links to absolute URLs
- `remarkHideWikilink.js` - Hides Obsidian-style wikilinks
- `remarkHighlight.js` - Syntax highlighting
- `rehypeCallout.js` - Custom callout/admonition blocks
- `extractAbstract.js` - Extracts content summary

### Configuration

- **Vite aliases**: `$content` → `./content`, `@` → `src`
- **SvelteKit adapter**: `@sveltejs/adapter-static` with prerendering
- **Dev server**: Allows reading from `content/` directory
- **SVG plugin**: Processes SVG imports with optimization

### IndieWeb Integration

The site implements IndieWeb standards:

- Microformats2 markup automatically added based on frontmatter
- Post type discovery algorithm (rsvp > reply > repost > like > photo > note)
- External commenting system integration
- Variable substitution in metadata files for h-card properties

## Development Notes

- Content is cached in production but reloaded on each request in dev mode
- Comments are fetched from external API (separate commenting service)
- Assets must be manually copied from content/assets/ to static/assets/ (automated in dev/build scripts)
- Unpublished content is skipped in production but shown in dev mode
- All markdown files support `%%comment%%` syntax for inline comments (stripped during processing)
