---
uuid: ad58acaf-56b0-4bcf-9b72-d6c054fc48d4
date: 2023-09-20T21:39:13Z
created: 2023-09-20T20:22:35.634Z
aliases:
title: Getting the Absolute Path of a Remote Directory in Ansible
published: true
modified:
description: There is no builtin way to convert a relative path to an absolute path in ansible. However we can use the readlink command for this.
cover_image: https://media.tiim.ch/3c1246e4-3201-4df6-af87-6aa4ab98800e.webp
cover_image_txt: (stable doodle) server room, neon, cables
content_tags:
  - dev
  - ansible
  - linux
  - bash
---

I recently had to find a way to delete a folder using Ansible that was being created by Docker. The folder had a path like `~/docker/myservice`. Since docker had created it as part of a volume, the folder did not belong to the current user. So deleting the folder using normal permissions failed.

Deleting with elevated permission on the command line is easy: The command `sudo rm -rf ~/docker/myservice` performs the `rm` operation as the root user. In bash, this will delete the `docker/myservice` folder in the user's home directory, but when doing the equivalent in Ansible, this won't work!

```yaml
# This does not work!
- name: Delete the folder using root permissions
  become: true
  ansible.builtin.file:
    path: "~/docker/myservice"
    state: "absent"
```

This code will try to delete the file `/user/root/docker/myservice`, which is not what we wanted.

The bash version works because the shell first resolves the tilde in the argument to the current users' directory before calling the sudo command. In Ansible, we first switch to the root user and only then the tilde is resolved: this time to the home directory of the root user.

To circumvent this, we can manually resolve the path to an absolute path. Unfortunately, I have not found a straightforward way to do this in Ansible, however the bash command `readlink -f <path>` does exactly this. To use it in Ansible, we can use the following configuration:

```yaml
- name: Get absolute folder path
  ansible.builtin.command:
    cmd: "readlink -f ~/docker/myservice"
  register: folder_abs
  changed_when: False

- name: Debug
  debug:
    msg: "{{folder_abs.stdout}}" # prints /user/tim/docker/myservice

- name: Delete the folder using root permissions
  become: true
  ansible.builtin.file:
    path: "{{folder_abs.stdout}}"
    state: "absent"
```

With this Ansible script, we manually resolve the absolute path and use it to delete the folder using root permissions. If you know of an easier way to resolve to an absolute path, please let me know!

%%

## Checklist

- [x] Finish writing text
- [x] Write description
- [x] tags
- [x] Thumbnail Created
  - [x] Resized to 1024x512
  - [x] Uploaded using uplog
  - [x] Prompt text or description added
- [x] Date set to timestamp
- [x] Reviewed using grammarly
- [x] Transferred to website/content folder
- [x] Removed heading
- [x] Reread on dev site

## 📎 Related

-
- [[Blog Posts]]

## 📇 Additional Metadata

- 🗂 Type:: #type/content/blog-post
- 📝 Status:: #status/idea
- 🔐 Visibility::
- 👥 Team::
- 🗨 Language: #lang/en

**Personal**

- 👍 Recommended By::
- 🔮 Inspired By::
- 👨‍🎓 Lecturer::
- 📕 Author::
