---
route: takethecue
title: Robotic Billiards Partner
subtitle: (First Place at McMaster's Engineering Competition)
published: true
description: An autonomous robotic system attached to a billiards table that sinks shots
tags: OpenCV,
      Arduino,
      3D Printing,
      Pneumatics,
      Systems Design
date: 2017-04-20
cover_image: "https://www.wallpaperflare.com/static/888/607/761/billiard-balls-pool-table-two-beige-wallpaper.jpg"
---

###  First Place in Engineering Competition

## Overview

The Capstone course is an opportunity for students to spend the year tackling an engineering problem of their choice. Our group chose to build an autonomous billiards partner. The project was split into three major components; mechanical, electrical and software.

<figure>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/DvnvjfgXFjw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <figcaption>Single shot calculated by the robot</figcaption>
</figure>

<figure>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/lD4AIjvDnsE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <figcaption>Promo video (src: Ernest Selman)</figcaption>
</figure>

**Did you notice the pieces changing colours in second video? That's because this project requried dozens of custom parts where we utilized laser cutters, 3D printers and spent many hours in the machine shop!**

## Mechanical 

We first started with constructing a 1:1 replica of the pool table in CAD and designed the system down to the nuts and bolts. This team spent days machining, 3D printing and laser cutting over 50 custom parts. The mechanical team also constructed the pneumatic system used to strike the balls (including pistons, compressors and pneumatic values). My contribution for this project was primarily with this team, due to my previous mechanical experience.

<figure>
    <img src="https://raw.githubusercontent.com/theguymeyer/guymeyer_CV/master/res/capstone/CAD/finalProduct.PNG" alt="cad render overview" width="40%"/>
    <img src="https://raw.githubusercontent.com/theguymeyer/guymeyer_CV/master/res/capstone/CAD/Arm-SquareBar-Rev3.png" alt="cad" width="40%"/>
    <img src="https://raw.githubusercontent.com/theguymeyer/guymeyer_CV/master/res/capstone/CAD/rotationalJoint.PNG" alt="cad render housing" width="40%"/>
    <img src="https://raw.githubusercontent.com/theguymeyer/guymeyer_CV/master/res/capstone/CAD/endEffector.png" alt="cad image on end effector" width="40%"/>
</figure>


## Electrical

This team was centered around the controls of the robot. Big challenges for this component was to synchronize the motion of the stepper motor to ensure fluid motion that would not shake the table. The electrical team was also responsible for timing and ensuring the shot process was smooth.

## Software

This part was very tricky! In order to determine the best shot several steps were necessary. First the program would capture a picture of the table with a phone mounted on the ceiling. Then the picture would be processed to determine ball colour and location. After an algorithm would run a point-based brute force algorithm to determine the ideal shot angle and power. The information would be relayed to the controls team that would proces and perform the shot.

