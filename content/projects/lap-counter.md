---
uuid: "871ebd58-0543-4d3a-9f3d-16cd85da9bf9"
title: Lap Counter
date: 2022-03-05T21:21:10+01:00
modified: 2022-06-08T22:15:48+02:00
section: Projects
published: true
content_tags: ["svelte", "swim", "dev"]
links:
  - "[Open Lap Counter](https://tiim.ch/lap-counter-js/)"
  - "[Source Code](https://codesandbox.io/s/laps-counter-8f0sb)"
---

A small web app help coaches count laps for multiple athletes. Has an integrated stopwatch and calculates the split for each athlete automatically.

I built this little page to help me count laps for my swimmers for some time based test sets. The first version of the app just had a grid of static buttons, one for each athlete. I quickly found that it is very hard to keep track which laps I already counted. As a way to visualise when each button was last pressed, they change colour. The buttons start green when pressed and slowly turn red over time, based on the average duration of a lap.

The page works completely offline (after the page loads) and no data is sent to any server. It is also possible to export the data to a csv file.
