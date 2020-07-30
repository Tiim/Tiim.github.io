---
route: serpui
title: SerpUI
published: true
description: For people who are blind or with low vision browsing the web is confusing and inaccessible, here's a tool that reimagines Google results page to provide a more accesible experience.
tags: UI/UX,
      HTML,
      JS,
      CSS,
      Nintendo JoyCon,
      Google Cloud Services,
      Text to Speech
date: 2019-12-05
cover_image: "https://images.ctfassets.net/u4vv676b8z52/3yei6en28fDXB5LitfI3ZZ/328097a0a79669ee1b9224e8d8309f0d/Hero_Article_EyeExam-LittleBoy-compressor.jpg?fm=jpg&q=80"
---

## Overview

Accessibility to information is important! But when vision degrades so does the ability to gather and synthesize information from online. SerpUI is free search engine tool that simplifies the Google search engine interface by minimizing the userspace and reducing the learning curve. 

### Try it out [here](https://serpui-heroku.herokuapp.com/)

## How does it work

The user has two controller options their keyboard or the Nintendo JoyCon controller connected via Bluetooth. The JoyCon controls are easy to learn and provide a comfortable browsing experience. The user starts by recording themselves describing what they would like to search. With the power of Google Cloud Services a real-time speech-to-text algorithm translates that to text where the user can verify their input. The background changes to a vibrant blue to appeal to users with strong visual impairment, a loud ***DING*** sound is also produced.


<figure class="figure">
    <img src="https://raw.githubusercontent.com/theguymeyer/guymeyer_CV/master/res/serpui/serpui_homepage.png" alt="pacemaker testing station setup" width="48%" style="float: middle;"/>
    <img src="https://raw.githubusercontent.com/theguymeyer/guymeyer_CV/master/res/serpui/serpui_recording.png" alt="pacemaker testing station setup" width="48%" style="float: middle;"/>
    <figcaption class="caption">Recording a query on the SerpUI Homepage (src: Guy Meyer)</figcaption>
</figure>
<figure>
    <img src="https://raw.githubusercontent.com/theguymeyer/guymeyer_CV/master/res/serpui/serpui_serp_hello.png" alt="pacemaker testing station setup" width="48%" style="float: middle;"/>
    <img src="https://raw.githubusercontent.com/theguymeyer/guymeyer_CV/master/res/serpui/serpui_youtube.png" alt="pacemaker testing station setup" width="48%" style="float: middle;"/>
    <figcaption class="caption">Moving around in the SerpUI Results Page (src: Guy Meyer)</figcaption>
</figure>

**SerpUI also supports YouTube and will play the videos auto-magically!**

## The Minimized Userspace

Once submitted they are redirected to SerpUI (Search Engine Results Page User Interface). On the results page the content is identical to Google's results page just presented differently, high contrast, focused and with interactive audio feedback. Rows represent result ranking, and columns categorize the result's content (ie. Title, Snippet, Page Content, Link). At any given moment the user can only select one of seven instructions:

1. Down Arrow => Next Search Result
2. Up Arrow => Previous Search Result
3. Right Arrow => Next Result Content
4. Left Arrow => Previous Result Content
5. SHIFT => Read Current Content
6. CTRL => Stop Text to Speech
7. ESC => Go To Homepage

This environment is surrounded with virtual borders that ***DING*** when the user hits them. This provides information on the location of the user. 

## Backend

A NodeJS server with Express. This is also where the Google Custom Search API was leveraged to attain accurate search results. The server is setup and maintained by me :)

## Frontend

In order to integrate the JoyCon the Gamepad API is used. JQuery is used to handle server request, and finally the ResponsiveVoiceJS API powers the text to speech in the entire app. 

### Source

This project is the product of my Master's research at McMaster University (see more in my [thesis](http://hdl.handle.net/11375/25138) under the Academia tab)

