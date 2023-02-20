---
uuid: "dd580343-9e0f-4754-93dd-25667e6b5859"
date: 2023-01-24
created: 2023-01-24T20:54:11.330Z
aliases:
  -
title: '"no such file or directory" after enabling CGO in Docker'
published: true
modified:
description: Quick fix for the "no such file or directory" error after enabling CGO, when running in a scratch docker image.
cover_image: ""
cover_image_txt: ""
content_tags: ["go", "cgo", "docker"]
---

Today I ran into the an error trying to deploy my go app in docker, where the container refused to start with the extremely helpful message `exec /app/indiego: no such file or directory`. I had removed the `CGO_ENABLE=0` variable from the Dockerfile, because I needed to enable cgo for a library. What I found out was that when enabling cgo, the resulting binary is not statically linked anymore and now depends on libc or musl. Since the `scratch` image does not contain literally anything, the binary can't find the libraries and crashes with the aforementioned error.

To include libc into the container, I simply changed the base image from `scratch` to `alpine`, which includes libc. This makes the image slightly larger but this seemed way easier than trying to include libc directly.

As a bonus I got to delete the `/usr/share/zoneinfo` and `ca-certificates.crt` files, and rely on those provided by alpine.

You can see the commit to IndieGo [here](https://github.com/Tiim/IndieGo/commit/63968814de7e39f295386bf398b583aa8bf0411c).

%%

## 📎 Related

-
- [[Blog Posts]]

## 📇 Additional Metadata

- 🗂 Type:: #type/content/blog-post
- 📝 Status::
- 🔐 Visibility::
- 👥 Team::
- 🗨 Language: #lang/en

**Personal**

- 👍 Recommended By::
- 🔮 Inspired By::
- 👨‍🎓 Lecturer::
- 📕 Author::
