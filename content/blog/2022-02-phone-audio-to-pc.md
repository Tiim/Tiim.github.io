---
title: How to Listen to Phone Audio on PC
published: true
date: 2022-02-12
description: Learn how to connect your phone audio to your PC over wire or Bluetooth.
cover_image: "/assets/2022-02-phone-audio-to-pc.jpg"
content_tags: [how-to, audio, windows, bluetooth]
---

Did you ever want to listen to your phone audio on your PC? I do it all the time to listen to podcasts on my PC without paying for a podcast app that syncs the episodes over the cloud. In this short article I will show you two easy ways to do this with a windows PC.

_TLDR_:

- Either use Bluetooth Audio Receiver from the Microsoft Store to connect you phone via Bluetooth,
- Or use an audio cable to connect the phone to the "line-in" on your PC.

## Bluetooth (recommended)

**Requirements**: A PC with integrated Bluetooth or a Bluetooth dongle.

I recommend this approach more than the wired one because it is way less effort, you don't have to deal with a USB or lightning to audio dongle and in my opinion it is more reliable.

Pair your phone with your PC as normal, by opening the Bluetooth settings on your phone and on the PC and wait for the devices to show up. When you successfully paired the phone once you will not have to do this again. Now you need an app that will tell the phone that it can use the PC as a wireless speaker. The only app I found that will do this is the [Bluetooth Audio Receiver](https://www.microsoft.com/de-de/p/bluetooth-audio-receiver/9n9wclwdqs5j) app from the Windows Store. Install and and open it. You should see your phone on the list of Bluetooth devices on the app. Select it and click on the `Open Connection` button. It might take a moment but after it connected, you should hear all sounds from your phone on your PC.

## Wired

**Requirements**:

- Male-to-Male audio cable (3.5mm audio jack).
- A line-in port on your PC (usually blue audio jack on the back)
- USB-C to audio jack adapter (Optional)
- Lighting to audio jack adapter (Optional)

This approach works if your PC doesn't support Bluetooth, or if the Bluetooth connection drops for some reason. Connect the audio cable to the blue line-in jack on the back of the computer. Then, connect the phone to the other end of the audio cable. If your phone does not have an audio jack, use the adapter on the USB-C or Lightning port. If your PC detects that you connected a new line-in device, it might open the audio settings automatically. If not, right-click on the volume icon on the taskbar next to the clock and select `Sounds`. Navigate to the `Input` tab and double click on the Line-In entry (the one with a cable icon). Navigate to the Monitor tab and select the check box for "Use this device as a playback source". This will tell windows it should play all sounds received through this input directly to the speakers. Usually this is used to monitor microphones but it works for this use case too. You should now hear any sound from your phone through your PC headphones or speakers. Make sure you turn this checkbox off when you disconnect your phone. Otherwise you might hear a crackle or other sounds when the loose cable gets touched.

_Photo by Lisa Fotios from Pexels_
