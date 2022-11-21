---
uuid: "3210d289-1f9e-41b5-b1f9-d20f00f6a0c5"
title: Aqualetics Coach
date: "2022-03-05T21:21:10+01:00"
modified: "2022-06-08T22:15:48+02:00"
section: Projects
published: true
content_tags:
  ["node", "vue", "graphql", "hasura", "postgresql", "docker", "dev"]
links:
  - "[Overview](https://sundrbi.ch/coach-application/)"
  - "[Blog Post 🇩🇪](https://aqualetics.ch/2019/09/15/schwimmcoach-applikation-innovation/)"
  - "[Aqualetics Swim School](https://aqualetics.ch)"
---

An internal web app for swim schools. Developed specifically for the "Kids" program of [Swiss Aquatics](https://www.swiss-aquatics.ch/sport-fuer-alle/kids-learn-to-swim/ausbildungssystem/). Live in production at the Aqualetics swim school since August 2019.

The web app allows swim instructors to track students attendance, rate their progress for objectives and provide written feedback to the parents.
The admin page has functionality for importing and exporting students, lessons, practice objectives as well as pdf documents suited for distribution to customers. The app is currently in use by over 10 swim instructors and back office admins.

![Screenshot of the coaches view](/assets/aqualetics-coach-screenshot.png)

The app is built using a Node.js, PostgreSQL, Hasura and Vue.js tech stack and runs in docker containers. The project started without Hasura and the API was manually built in node. Fortunately Hasura provides most of that functionality out of the box, so I was able to replace 90% of the backend code with it.
