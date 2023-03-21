---
uuid: "c67bc4dc-4c96-41b1-afb5-15a99457dedf"
date: 2023-03-15T15:22:04.511Z
created: 2023-03-15T15:22:04.511Z
aliases:
  -
title: "Fix Network Connectivity in WSL2 with Cisco AnyConnect VPN"
published: true
modified:
description: I ran into problems using Cisco AnyConnect VPN from inside of WSL2. I'm sharing my solution as a step-by-step guide for my reference and to help anyone with the same problem.
cover_image: "https://media.tiim.ch/66ca4290-3fc0-450f-977b-f00f888e4af3.webp"
cover_image_txt: "Stable Diffusion - Anything V3.0 - 1boy, hacker, in front of computer, back of head visible, vintage neon color scheme, terminal, big monitor"
content_tags: ["wsl", "vpn", "networking", "dns"]
---

# [[Fix Network Connectivity in WSL2 with Cisco AnyConnect VPN (Blog Post)]]

I recently ran into the problem that when the Cisco AnyConnect VPN is connected, the network connectivity inside of WSL2 stops working. I found a bunch of solutions online for it: most just focus on the fact that the VPN DNS settings are not applied inside WSL2 and therefore no domain names can be resolved. I additionally had the issue that the WSL2 network interface somehow gets disconnected when the VPN starts.

I will show you how I fixed this problem for me and explain what the commands I used do. This post is mostly for my reference, but I hope it helps anyone else as well.

## Finding out what your problem is

Let's check first if we have internet access inside WSL2. For this run the ping command with an IP address as a destination:

```sh
ping 8.8.8.8
```

If you get something like this as the output, your internet connection is fine, and it's just the DNS nameserver addresses that are misconfigured, you can jump forward to Solution 2.

```
PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=1 ttl=108 time=4.53 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=108 time=3.94 ms
64 bytes from 8.8.8.8: icmp_seq=3 ttl=108 time=3.97 ms
64 bytes from 8.8.8.8: icmp_seq=4 ttl=108 time=3.78 ms
64 bytes from 8.8.8.8: icmp_seq=5 ttl=108 time=3.77 ms
64 bytes from 8.8.8.8: icmp_seq=6 ttl=108 time=3.76 ms
64 bytes from 8.8.8.8: icmp_seq=7 ttl=108 time=3.81 ms
```

If you don't get any responses from the ping (i.e. no more output after the `PING 8.8.8.8 (8.8.8.8) ...` line), you need to configure the WSL and the VPN network adapter metric. Go to Solution 1.

To check if the DNS is working, we can again use the ping command, this time with a domain name:

```sh
ping google.com
```

If you get responses, the DNS and your internet connection are working! If not go to Section 2.

## Solution 1: Fixing the Network Adapter

Run the following two commands in PowerShell as administrator:

```PowerShell
Get-NetAdapter | Where-Object {$_.InterfaceDescription -Match "Cisco AnyConnect"} | Set-NetIPInterface -InterfaceMetric 4000

Get-NetIPInterface -InterfaceAlias "vEthernet (WSL)" | Set-NetIPInterface -InterfaceMetric 1
```

Let me explain what those two commands do. Both follow the same pattern of listing all network adapters, selecting a specific adapter from the list and setting its "metric".

You can imagine an adapter as a virtual network port on the back of your pc or laptop. But instead of sending packets through the wire, the driver for a specific port can do whatever it wants with those packets, in the case of a VPN, the packets get encrypted and forwarded to the internet via another adapter.

The [InterfaceMetric](https://learn.microsoft.com/en-us/windows-server/networking/technologies/network-subsystem/net-sub-interface-metric) is a value associated with each adapter that determines the order of those adapters. This allows windows to determine which adapter to prefer over another one.

By setting the interface metric of the Cisco adapter to 4000 and the metric of the WSL adapter to one, we allow the traffic from WSL to flow through the Cisco adapter. To be honest I do not exactly understand why this works but it does.

## Solution 2: Registering the VPN DNS inside of WSL

Setting the DNS servers is, unfortunately, a little bit more involved than just running two commands, we need to edit the files `/etc/wsl.conf` and `/etc/resolv.conf`, and restart wsl in between. Let's get to it:

Edit the file `/etc/wsl.conf` inside of WSL2 using a text editor. I suggest doing this through the terminal since you need root permissions to do that:

```sh
sudo nano /etc/wsl.conf
# feel free to use another editor such as vim or emacs
```

Most likely this file does not exist yet, otherwise, I suggest you create a backup of the original file to preserve the settings.

Add the following config settings into the file:

```ini
[network]
generateResolvConf = false
```

This will instruct WSL to not override the `/etc/resolv.conf` file on every start-up. Save the file and restart WSL with the following command so that the changed config takes effect:

```sh
wsl.exe --shutdown
```

Now open a PowerShell terminal and list all network adapters with the following command:

```PowerShell
ipconfig /all
```

Find the Cisco AnyConnect adapter and copy the IP addresses in the DNS-Server field. We will need those IPs in the next step.

Start WSL again and edit the `/etc/resolv.conf` file:

```sh
sudo nano /etc/resolv.conf
```

Most likely there is already something in this file, you can discard it. When undoing the changes, WSL will automatically regenerate this file anyway, so you don't need to back it up.

Delete all the contents and enter the IP addresses you noted down in the last step in the following format:

```resolv
nameserver xxx.xxx.xxx.xxx
```

Put each address on a new line, preceded by the string `nameserver`.
Save the file and restart WSL with the same command as above:

```sh
wsl.exe --shutdown
```

Now open up WSL for the last time and set the immutable flag for the `/etc/resolv.conf` file:

```sh
chattr +i /etc/resolv.conf
```

And for the last time shut down WSL. Your DNS should now be working fine!

## Undoing those changes

I did not have a need to undo the steps for `Solution 1`, and I'm pretty sure the metric resets after each system reboot anyway so there is not much to do.

To get DNS working again when not connected to the VPN run the following commands:

```sh
sudo chattr -i /etc/resolv.conf
sudo rm /etc/resolv.conf
sudo rm /etc/wsl.conf
wsl.exe --shutdown
```

This will first clear the immutable flag off `/etc/resolv.conf`, and delete it. Next, it will delete `/etc/wsl.conf` if you have a backup of a previous `wsl.conf` file, you can replace it with that. At last, we shutdown WSL again for the changes to take effect.

Unfortunately, this is quite a procedure to get a VPN to work with WSL2, but I'm hopeful that this will soon not be necessairy anymore.

%%

## 📎 Related

- [[WSL2 Cisco AnyConnect VPN]]
- [[Blog Posts]]

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
