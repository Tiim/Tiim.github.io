---
uuid: "ef51e944-86fa-44b0-ab9d-be7f8d8e569a"
date: 2023-03-28T10:05:19Z
created: 2023-01-15T20:35:40.643Z
aliases:
  -
title: Weechat Notifications with ntfy.sh
published: true
modified:
description: "Using the weechat trigger plugin to notify yourself about new private messages and mentions through the ntfy.sh notification service."
cover_image: "https://media.tiim.ch/97833b1d-d602-4d9a-9689-3077e96e45ba.webp"
cover_image_txt: "stable diffusion - Anything V3.0 - boy using an old DOS computer, 90s vibes, muted pastel colors, stylized, thick lines, IRC, console"
content_tags: ["weechat", "ntfy.sh", "wget", "irc"]
---

In one of my last blog posts I [set up WeeChat in docker](https://tiim.ch/blog/2023-01-15-weechat-docker), which works mostly pretty great for me so far. Although, it started to bug me that I felt the need to regularly check IRC in case I missed someone potentially tagging or private-messaging me. While looking around at how I could be notified on mentions and private messages, I found the [trigger plugin](https://weechat.org/files/doc/stable/weechat_user.en.html#trigger). A powerful plugin that comes pre-installed on WeeChat. It lets the user specify a WeeChat command that will be executed when a specific event occurs. This plugin is probably powerful enough to build a small IRC bot, directly in WeeChat.

Also, I recently found the web service [ntfy.sh](https://ntfy.sh). It sends push notifications whenever you send an HTTP post request to a certain URL. I already have ntfy.sh installed on my android phone, and I also found a minimal and lightweight [desktop client](https://github.com/lucas-bortoli/ntfysh-windows).

I managed to set a WeeChat trigger up that fires every time I get mentioned (highlighted in WeeChat terminology), and a trigger that fires every time I get a private message. Both of those triggers execute the `/exec` command which runs an arbitrary shell command. The exec command runs the `wget` program to send a post request to the ntfy.sh server, which in turn sends a notification to all apps that subscribe to the same URL as the post request was sent. I would usually use the curl program for this instead of wget, but the docker default docker image doesn't contain a curl install.

Here you can see the two `/trigger` commands:

_trigger on mention_

```
/trigger addreplace notify_highlight print '' '${tg_highlight}' '/.*/${weechat.look.nick_prefix}${tg_prefix_nocolor}${weechat.look.nick_suffix} ${tg_message_nocolor}/' '/exec -norc -nosw -bg wget -O- --post-data "${tg_message}" "-                   -header=Title: New highlight: ${buffer.full_name}" https://ntfy.sh/my_ntfy_topic_1234'
```

_trigger on private message_

```weechat
/trigger addreplace notify_privmsg print '' '${tg_tag_notify} == private && ${buffer.notify} > 0' '/.*/${weechat.look.nick_prefix}${tg_prefix_nocolor}${weechat.look.nick_suffix} ${tg_message_nocolor}/' '/exec -norc -nosw -bg wget -O- --post-data "${tg_message}" "--header=Title: New private message: ${buffer.full_name}" https://ntfy.sh/my_ntfy_topic_1234'
```

## The trigger commands in detail

In case you don't just want to copy and paste some random command from the internet into your WeeChat (which you shouldn't do anyway), I will try to explain the trigger command that fires when you get mentioned in a message:

Let's first look at the trigger command itself:
`/trigger addreplace <name> <hook> <argument> <condition> <variable-replace> <command>`
We call the `/trigger` command with the `addreplace` subcommand. This subcommand will either register a new trigger or replace it if one with the same name already exists.

- `name` - This argument is self-explanatory, the name of the trigger. In our case I called it `notify_highlight`, but you could call it whatever you want.
- `hook` - This argument specifies which hook or event the trigger should listen for. WeeChat is built as an event-driven platform, so pretty much anything from mouse movements to IRC messages are handled via events. In this case, we want to trigger on the `print` event, which is fired every time a new message gets received from IRC.
- `argument` - The argument is needed for some hooks, but not for the `print` hook, so we are going to ignore that one for now and just set it to an empty string `''`.
- `condition` - The condition must evaluate to `true` for the trigger to fire. This is helpful because the `print` trigger fires for every new message, but we only want to be notified when the new message mentions our nick. The condition for this is `${tg_highlight}`. You can find the list of variables that you can access with the command `/trigger monitor`, which prints all variables for every trigger that gets executed.
- `variable-replace` - This took me a while to understand. This command is used to manipulate data and save it to a variable. The syntax is inspired by the sed command. Explaining it fully is out of the scope of this blog post, but you can take a look at the [docs](https://weechat.org/files/doc/devel/weechat_user.en.html#trigger_regex). In our example, we replace the whole content of the variable `tg_message` with the format string `${weechat.look.nick_prefix}${tg_prefix_nocolor}${weechat.look.nick_suffix} ${tg_message_nocolor}` which results in a string like `<tiim> Hello world!`.
- `command` - The last argument is the command that gets executed whenever this trigger fires. In our case, we use the `/execute` command, which starts the wget command which in turn sends a post request to ntfy.sh. Make sure you set the ntfy topic (the part after `https://ntfy.sh/`) to something private and long enough so that nobody else is going to guess it by accident.

Don't forget to subscribe to the ntfy topic on your phone or whatever device you want to receive the notification on.

The possibilities with the trigger plugin are endless, I hope this inspires you to build your own customizations using weechat.

%%

## Checklist

- [x] Finish writing text
- [x] Thumbnail Created
  - [x] Resized to 1024x512
  - [x] Uploaded using uplog
  - [x] Prompt text or description added
- [ ] Date set to timestamp
- [x] Reviewed using grammarly
- [x] Transferred to website/content folder
- [x] Removed heading
- [ ] Reread on dev site

## 📎 Related

- [[Blog Posts]]
- [[WeeChat (Software)]]
- [[ntfy.sh (Service)]]

## 📇 Additional Metadata

- 🗂 Type:: #type/content/blog-post
- 📝 Status:: #status/ready
- 🔐 Visibility::
- 👥 Team::
- 🗨 Language: #lang/en

**Personal**

- 👍 Recommended By::
- 🔮 Inspired By::
- 👨‍🎓 Lecturer::
- 📕 Author::
