---
uuid: 3af67a63-5f3a-422c-8aee-5e3daa8921f9
date: 2023-12-04T08:00:00
created: 2023-12-03T21:08:16
aliases:
title: My Selfhosting Setup
published: true
modified:
description: A short overview on how I self-host.
cover_image: https://media.tiim.ch/4a0a43eb-cf95-4273-b6a6-e085c9123985.webp
cover_image_txt: "Model: realvisxlV20_v20Bakedvae; beach sunset, palms, calm ocean, fine sand, cinematic shot, photorealistic ## (worst quality)"
content_tags:
  - ansible
  - docker
  - traefik
  - server
---

> [!NOTE]
> This post is meant as a reference for myself. I only published it in case someone else might find it interesting.
> I did not spend much time on this post.

I do host some services on a few rented VPS servers and on my "home lab", which is just an old desktop that is running in the basement.
When I got into self-hosting, I decided I would host everything exclusively in docker, which has served me pretty well over the last few years. In the last while I
have learned a lot about Kubernetes, and am strongly considering switching my "simple" hosting setup for a more complex Kubernetes cluster. So before I do that I want
to write down what my current setup looks like.

## Setup

![](https://media.tiim.ch/0887e318-9359-4753-abaf-49ae7c26dfcd.webp)

As mentioned, everything is hosted in docker containers. Generally, I try to keep everything in docker-compose, since this allows me to specify the settings of the container once, and easily modify it later.
To have multiple services available on port 80 and 443, I use the [[Traeffik (Software)]] reverse proxy. I use Traefik without a config file, meaning it pulls the routes and rules directly from the labels of the
running containers on the VPS. This makes it easy to launch a new service and have its reverse proxy config directly in the docker-compose file.

Since many services use a database, and Postgres seems to be supported by many open-source projects, I decided to have a central Postgres instance running in a docker container. This allows me to
back it up with a simple cron job in a single place. If a service does not support Postgres, I specify its database directly in the docker-compose file.

Almost all services use disk access for either config, local files, or similar. I do have a docker folder that is the root of all locally stored files.

## OS Setup

When I first started, I configured everything by hand, and documented how, why, and what I did. However I was not happy with this, I could not test it out and it was prone to errors.
Therefore, I decided to use Ansible to set up the server and install all dependencies.
This worked well, so well that I decided that Ansible was good enough to use to operate the entire pipeline, even to automate the deployment of the services.

## Deployment

I do have an ansible role per service, with its configuration (mostly) as ansible YAML files, and the docker-compose files and other config files as ansible templates. This worked great, with a single ansible-playbook command I can
make sure everything is running and has the right config.
For most services, I even built logic to make sure that when the docker-compose file or a config file changes, the container is restarted.

## The good parts

I am quite happy with this system in general. Everything runs stable, backups are easy and automated, and deployments for services that are already configured are a breeze.
I can keep the whole "description" of what is running in a single git repo, and make changes by editing config files.
This is a huge step up from manually deploying and keeping track of what docker commands to use for what service.

## The not so good parts

Recently I noticed some pain points.

1. If I want to deploy a service twice for two domain names, I have to create a copy of the role. This unfortunately leads to duplicated "code" which can (and does) lead to configuration drift.
2. I have to code things myself that already exist. For example, restarting a container when a config value changes. For most services this is implemented, but not everywhere, and also not for all possible things that can be changed. This is not what I want to be concentrating on if I am writing the config to deploy a service.

In general, I seem to have built a worse subset of Kubernetes myself, just without the robustness that makes Kubernetes so interesting.

## My plan for the future

I am planning to replace docker with Kubernetes, specifically [[K3s (Software)]], a very lightweight and mostly "batteries included" Kubernetes distribution.
Ansible will stay, but only as a tool to set up and configure the OS, install dependencies, and install and run K3S. Deployment of services I either want to do directly using the kubectl command line tool, or more likely using
[[ArgoCD (Software)|ArgoCD]], a project that pulls Kubernetes manifests from a Git repository and automatically deploys it.

For the configuration, I will take a look at [[Helm (Software)]].
