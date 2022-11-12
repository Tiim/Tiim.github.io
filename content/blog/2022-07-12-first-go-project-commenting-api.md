---
uuid: "bff14052-4f3f-4dcb-bcee-155ae1c6b09e"
date: 2022-07-12
created: 2022-07-08T16:24:37.766Z
aliases:
  -
title: "First Go Project: A Jam-stack Commenting API"
published: true
modified:
description: "I built my first project using the Go programming language: A commenting API for the jam-stack. It is simple but easily extensible. And it powers the commenting feature of this website!"
cover_image: "/assets/2022-07-first-go-project-commenting-api.png"
content_tags: ["go", "web-api", "project", "tiim.ch"]
---

I recently have been looking around for a simple commenting system to integrate into my website. Since my website is a pre-rendered static Html site hosted on [Github Pages](https://pages.github.com), there is no way for it to directly store comments because it does not have a database. The only option for dynamic content to be stored is with an external service.

I kept my eyes open for a service that I liked, but I did not want to just integrate any old service into my website, I did have some requirements:

- The service should not cost anything. I would rather host something myself than sign up for another subscription (because I'm already paying for a VPS anyway).
- I want to control how the comments on my website are displayed. I quite like my website design and I don't want a generic comment box below my posts.
- The service should respect the privacy of the people using my website.
- There should be an option to comment without setting up an account with the service.

While looking around for how other people integrated comments into their static websites, I found a nice [blog post from Average Linux User](https://averagelinuxuser.com/static-website-commenting/) which compares a few popular commenting systems.
Unfortunately, most systems either are not very privacy-friendly, cost money or store the comments as comments on Github issues..?
After looking through the options I decided to use this opportunity to write my own commenting system and dabble with the Go programming language.

## Writing a commenting API in Go

First thing first, if you want to take a look at the code, check out the [Github repo](https://github.com/Tiim/go-comment-api).

I decided to write the commenting system in Go because I have been looking for an excuse to practice Go for a while, and this seemed like the perfect fit. It is a small CRUD app, consisting of a storage component, an API component and a small event component in the middle to easily compose the functionality I want.

Currently, it supports the following functionality:

- Listing all comments (optionally since a specified timestamp)
- Listing all comments for a specified page (optionally since a specified timestamp)
- Posting comments through the API
- A simple admin dashboard that lists all comments and allows the admin to delete them
- Email notifications when someone comments
- Email notifications when someone replies to your comment
- SQLite storage for comments

The code is built in a way to make it easy to customise the features.
For example to disable features like the email reply notifications you can just [comment out the line in the main.go](https://github.com/Tiim/go-comment-api/blob/master/main.go#L52) file that registers that hook.

To write custom hooks that get executed when a new comment gets submitted or one gets deleted, just implement the [Handler](https://github.com/Tiim/go-comment-api/blob/master/event/handler.go) interface and register it in the main method.

You can also easily add other storage options like databases or file storage by implementing the [Store and SubscribtionStore](https://github.com/Tiim/go-comment-api/blob/master/model/store.go) interfaces.

## Can it be used in production? 🚗💨

I currently use it on this website! Go test it out (I might delete the comments if they are rude though 🤔).

In all seriousness, I would not use it for a website where the comments are critical. But for a personal blog or similar, I don't see why not.

If you want to host your own version, there is a Dockerfile available. If you decide to integrate this into your website, please comment below, ping me [@TiimB](https://twitter.com/TiimB) or shoot me an email [hey@tiim.ch](mailto:hey@tiim.ch), I would love to check it out.
