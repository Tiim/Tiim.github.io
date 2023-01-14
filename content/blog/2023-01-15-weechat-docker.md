---
uuid: "889ff4db-3ccb-4ab1-9676-a2b0ea8f19eb"
date: 2023-01-15
created: 2023-01-15T00:17:07.000Z
aliases:
  -
title: Running the WeeChat IRC Client on a VPS in Docker
published: true
modified:
description: Walkthrough on how to setup the WeeChat IRC client in docker.
cover_image: "https://media.tiim.ch/a28c65a1-ed95-43d3-af87-a2ad222bee7f.jpg"
cover_image_txt: "Stable Diffusion - anime landscape, pastel colors, thick outlines, forest, mountains, golden light"
content_tags: ["irc", "weechat", "docker"]
---

I have recently gotten interested in IRC for some reason and have been looking for a client that I like. I have used [HexChat](https://hexchat.github.io/) in the past, but I don't really fancy having yet another communications program running on my PC next to discord, zoom, telegram and thunderbird. I have been trying to use the IRC feature of thunderbird, but even though it works, it feels very much like an afterthought.

The one client I have seen mentioned a lot is [WeeChat](https://weechat.org/) (not to be confused with WeChat, the Chinese instant messenger). WeeChat runs in the terminal as a [TUI](https://en.wikipedia.org/wiki/Text-based_user_interface) and after a while of getting used to (and after enabling 'mouse mode') it seems intuitive enough.

The nice thing about WeeChat running not as a graphical application, is that it makes it possible to run on a server and access it from anywhere over ssh.

> [!INFO] INFO
> Except on mobile devices, but weechat has mobile apps that can connect to it directly.

Since I pretty much host all my selfhosted software in docker on a VPS, I was looking if someone already published a docker image for WeeChat. There is a bunch of them, but only [weechat/weechat](https://hub.docker.com/r/weechat/weechat) (the official image) is still updated regularly. The docker hub page does not have any documentation, but I managed to find it in the [weechat/weechat-container](https://github.com/weechat/weechat-container) github repo.

As it says in the readme on github, you can start the container with

```sh
docker run -it weechat/weechat
```

which will run weechat directly in the foreground.

> [!INFO] Info
> Don't skip the `-it` command line flags. The `-i` or `--interactive` keeps stdin open, which is required to send input to weechat. Weechat also closes immediately if the stdin gets closed, which took me a while to figure out.
> The `-t` or `--tty` flag is required to provide a fake tty to the container. I don't really understand what that means but without this you won't see the user interface of weechat.

Running in the foreground is not really that helpful if we want to run weechat on a server, so we need to detach (let it run in the background) from the container with the `-d` or `--detach` flag. It also helps to specify a name for the container with the `--name <name>` argument, so we can quickly find the container again later. The docker command now looks like this:

```sh
docker run -it -d --name weechat weechat/weechat
```

When we run this command, we will notice that weechat is running in the background. To access it we can run `docker attach weechat`. To detach from weechat without exiting the container, we can press `CTRL-p CTRL-q` as described in the [docker attach reference](https://docs.docker.com/engine/reference/commandline/attach/#description)

I noticed that there are two versions of the weechat image: a debian version and an alpine linux version. Generally the Alpine Linux versions of containers are smaller than the Debian versions, so I decided to use the alpine version: `weechat/weechat:latest-alpine`.

With this we are practically done, but if we ever remove and restart the container, all of the chat logs and customisations to weechat will be gone. To prevent this we need to add the config and log files to a volume.

I generally use the folder `~/docker/(service)` to point my docker volumes to, so I have a convenient place to inspect, modify and back up the data.

Let's create the folder and add the volume to the docker container. I also added the `--restart unless-stopped` flag to make sure the container gets restarted if it either exits for some reason of if docker restarts.

```sh
mkdir -p ~/docker/weechat/data
mkdir -p ~/docker/weechat/config

docker run -it -d --restart unless-stopped \
    -v "~/docker/weechat/data:/home/user/.weechat" \
    -v "~/docker/weechat/config:/home/user/.config/weechat" \
    --name weechat weechat/weechat:latest-alpine`
```

Running this command on the server is all we need to have weechat running in docker.

> But how do I quickly connect to weechat? Do I always have to first ssh into the server and then run docker attach?

Yes but, as almost always, we can simplify this with a bash script:

```bash
#!/usr/bin/env bash

HOST=<ssh host>
ssh -t "${HOST}" docker attach weechat
```

This bash script starts ssh with the `-t` flag which tells ssh that the command is interactive.
Copy this script into your `~/.local/bin` folder and make it executable.

```sh
nano ~/.local/bin/weechat.sh
chmod +x weechat.sh
```

And that's it! Running `weechat.sh` will open an ssh session to your server and attach to the weechat container. Happy Chatting!

If you liked this post, consider subscribing to my blog via [RSS](https://tiim.ch/blog/rss.xml), or on [social media](https://tiim.ch/follow). If you have any questions, feel free to [contact me](/contact). I also usually hang out in [`##tiim` on irc.libera.chat](irc://irc.libera.chat/##tiim). My name on IRC is `tiim`.

%%

## 📎 Related

-

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
