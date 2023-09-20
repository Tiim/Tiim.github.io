---
uuid: "bfa1a7fa-b8a3-469f-b8e8-727ab705cb93"
title: Pomo 🍅
date: 2023-08-03T11:03:00Z
modified:
section: Projects
published: true
content_tags: ["rust", "cli", "dev"]
links:
  - "[pomo Github](https://github.com/Tiim/pomo)"
---

I created pomo as a way to keep me focused for working on my masters thesis, and at the same time
allowed me to learn the rust programming language.

Pomo is a simple pomodoro timer. It allows you to either specify the number of repetitions (pomodori), the duration of the pomodori and the duration of the breaks, or
you can stecify an end time, and let pomo calculate the durations and repetitions.

Pomo runs as a cli tool and stores the current state in a json file. All pomo executions excep `pomo watch` just
modify this json file and terminate. The watch command displays the current pomodoro timer, optionally writes the timer to a text file,
and watches for changes of the json file.
