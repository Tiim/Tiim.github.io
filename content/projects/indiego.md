---
uuid: "0cf125b3-a99a-4996-8f84-ec5105d64c57"
title: IndieGo
date: 2023-08-02T08:39:00Z
modified:
section: Projects
published: true
cover_image: "/assets/2022-07-first-go-project-commenting-api.png"
content_tags: ["go", "golang", "indieweb", "docker", "sqlite", "dev"]
links:
  - "[IndieGo Github](https://github.com/Tiim/IndieGo)"
  - "[Admin Interface](https://comments.tiim.ch) - authentication required"
---

I blogged about creating a comment system for my website [a while ago](/blog/2022-07-12-first-go-project-commenting-api),
and later how I [implemented webmentions into that same project](/blog/2022-12-indiewebifying-my-website-part-1).
Since then this little go program has grown quite a bit, and it has turned into a modular platform
that supports quite a few technologies:

- The basic commenting system
- Sending and receiving webmentions
- Micropub server implementation
- IndieAuth (decentralized authentication standard based on OAuth)
- Admin dashboard
- Admin backup endpoint

Currently I am working on supporting AcitvityPub, so people can follow my blog through the fediverse, and
comments through the fediverse show up back on my website.

The architecture of the application is inspired by the Caddy webserver, where every feature is implemented as a plugin, and the core
of the application is only concerned with initializing those plugins.

If you have any questions, or want to run IndieGo yourself, don't hesitate to [contact me](/contact).
