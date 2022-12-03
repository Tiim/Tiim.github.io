---
uuid: "3b342241-c414-4670-bd22-03e13d6531b7"
date: 2022-11-12T10:55:14Z
aliases:
  -
title: IndieWebifying my Website Part 1 - Microformats and Webmentions
published: true
modified: 2022-12-03T20:56:54Z
description: This site now supports sending and receiving webmentions and surfacing structured data using microformats2.
cover_image: "https://i.imgur.com/FpgIBxI.jpg"
content_tags: ["IndieWeb", "Webmentions", "mf2", "tiim.ch", "go", "indiego"]
syndication: ["https://news.indieweb.org/en"]
---

A few weeks ago, I stumbled on one of [Jamie Tanna's blog posts about microformats2](https://www.jvt.me/posts/2019/08/21/rsvp-from-your-website/) by accident. That is when I first learned about the wonderful world of the [IndieWeb](https://indieweb.org/why). It took me a while to read through some of the concepts of the IndieWeb like webmentions, IndieAuth, microformats and all the other standards, but the more I found out about it the more I wanted to play around with it. And what better place to try out new technology than on a personal website?

## The IndieWeb

I will start with a brief introduction for the uninitiated. If you have already heard about the IndieWeb, feel free to skip to the next section.

The IndieWeb is a collection of standards, intending to make the web social, without the user giving up ownership of their data. While on social media platforms (or as called in IndieWeb terms: silos) you can easily communicate with others, you are always subject to the whims of those platforms.

The IndieWeb wants to solve this by defining standards that, once implemented in a website, allow it to communicate with other websites that are also part of the IndieWeb.

The most important concept of the IndieWeb is, you have control over your data. All of your shared data lives on a domain you control.

Some of the standards in the IndieWeb include:

- Microformats2: a way to add structured data to the HTML source code of a website so machines can interpret the data.
- Webmentions: a simple communication protocol between websites. It can be used to show comments, likes, bookmarks and more on one website, while the data stays on another website.
- IndieAuth, an OAuth2-based way to log in using only your domain name.

## The implementation on my website

As explained in my earlier post [First Go Project: A Jam-stack Commenting API](https://tiim.ch/blog/2022-07-12-first-go-project-commenting-api), my website is a statically built SvelteKit app hosted on GitHub Pages. This means the most important part of the IndieWeb is already implemented: I own this domain and post my content here.

### Making the website machine-readable with Microformats

As mentioned above, the microformats2 standard allows websites to encode data about the page in a machine-readable format. This is accomplished by annotating HTML elements with some predefined class names. For example, the microformat for a blog post, note and other content is called [h-entry](http://microformats.org/wiki/h-entry). By adding the `h-entry` class to a div, its content is marked as belonging to that post. Children of this div can in turn have other microformat elements such as `p-name`, `p-author` or `dt-published`.

While these CSS classes make the data machine-interpretable, the same data is still available to the user. There is no duplication like for example the meta tags in OpenGraph.

Since my page is a custom SvelteKit app, it was easy enough to add the CSS classes to the right places. I even took the opportunity to add some more information to the pages, like the author card you see if you scroll to the bottom of this post.

### Accepting comments and other interactions via Webmentions

The standard I wanted to play around with the most are webmentions. A webmention is a sort of notification sent from one website A to another website B, telling B that A has a page linking to it.

In the IndieWeb all types of interactions are just web pages. The microformats2 specification for example allows replies, quotes, likes, bookmarks and many other types of interactions. The receiver of the webmention is free to extract any relevant information from the sender page and might display it, for example as a comment.

Since I already have a [small custom service](https://github.com/Tiim/IndieGo) running for the comment section on this site, I decided to add support to it for receiving webmentions. I refactored the comment system quite a bit to make it more modular and extendable, to allow me to add webmentions

It currently supports all the required and some optional features for receiving webmentions: The first thing it does is validate the mention. A mention is only valid if the source and target URLs are valid and if the page from the source URL links to the target URL. The next step is extracting some microformat content from the source URL and saving it to the database.
I found some things unexpectedly tricky to implement: for example, a repeated webmention with the same source URL should update the previously saved webmention if the link to the target page is still there, but delete the webmention if the link was removed.

I have tested my webmentions implementation using [webmention.rocks](https://webmention.rocks), but I would appreciate it if you left me a mention as well 😃

### Publishing short-form content such as replies, likes and bookmarks: A notes post type

The next thing I wanted to add to my website was sending webmentions. But before I implemented that, I wanted a way to publish short content without spamming my blog feed. For this, I created a new post type called [notes](/mf2). The list of notes lives on the /mf2 page because I plan to mostly use it to publish notes that contain microformats2 classes such as replies and likes. Another reason I didn't want to make it accessible as the /notes page is that I plan to publish my Zettelkasten notes eventually, but this is a story for another post.

I also used the opportunity to add an RSS feed for all my posts, pages, projects, and notes: [full-rss.xml](/full-rss.xml). I do not recommend you subscribe to it unless you are curious about all changes to the content on my website.

### Notifying referenced websites: Sending Webmentions

Sending webmentions was easy compared to receiving webmentions:

On a regular interval (and on page builds), the server loads the full RSS feed and checks what items have a newer timestamp than the last time. It then extracts a list of all URLs from that feed item and loads the list of URLs that it extracted last time. Then a webmention is sent to all the URLs.

Luckily I did not have to implement any of this myself apart from some glue code to fit it together: I used the library [gocron](https://github.com/go-co-op/gocron) for scheduling the regular intervals, [gofeed](https://github.com/mmcdole/gofeed) for parsing the RSS feed and [webmention](https://willnorris.com/go/webmention) for extracting links and sending webmentions.

### In the future: IndieAuth

The next thing on my roadmap is implementing IndieAuth. Although not because I have a real use case for it, but because I'm interested in OAuth, the underlying standard, and this seems like a good opportunity to get a deeper understanding of the protocol.

Although, before I start implementing the next things, I should probably focus on writing blog posts first. There is no use in the most advanced blogging system if I can't be bothered to write anything.

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
