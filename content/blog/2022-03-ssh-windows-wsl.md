---
title: How to set up an SSH Server on Windows with WSL
published: true
date: 2022-03-02
description: It can be very helpful to be able to connect to your laptop or desktop PC from anywhere using SSH. I will show you how to easily set this up on Windows with WSL.
cover_image: "/assets/2022-03-ssh-windows-wsl.png"
content_tags: [SSH, WSL, Windows, dev]
---

There [are](https://gist.github.com/dentechy/de2be62b55cfd234681921d5a8b6be11) [many](https://medium.com/@thinkbynumbers/automatically-start-wsl-ssh-and-various-services-on-windows-845dfda89690) [guides](https://faun.pub/how-to-setup-ssh-connection-on-ubuntu-windows-subsystem-for-linux-2b36afb943dc) on the [internet](https://superuser.com/questions/1112007/how-to-run-ubuntu-service-on-windows-at-startup) showing how to set up an SSH server **inside** WSL. This is currently not that easy and in my experience, it is not really stable. An alternative to this is to run the SSH server outside of WSL on the windows side and set its default shell to the WSL shell (or any other shell for that matter).

## Installing the OpenSSH Server

Windows has been shipping with an OpenSSH client and server for a long time. They are not installed by default but can be activated either in the settings as described [in the official docs](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse) or with the following PowerShell commands.

**You will need to start PowerShell as Administrator**

First, install the OpenSSH client and server.

```PowerShell
Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
```

Enable the SSH service and make sure the firewall rule is configured:

```PowerShell
# Enable the service
Start-Service sshd
Set-Service -Name sshd -StartupType 'Automatic'

# Confirm the firewall rule is configured. It should be created automatically by setup. Run the following to verify
if (!(Get-NetFirewallRule -Name "OpenSSH-Server-In-TCP" -ErrorAction SilentlyContinue | Select-Object Name, Enabled)) {
    Write-Output "Firewall Rule 'OpenSSH-Server-In-TCP' does not exist, creating it..."
    New-NetFirewallRule -Name 'OpenSSH-Server-In-TCP' -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22
} else {
    Write-Output "Firewall rule 'OpenSSH-Server-In-TCP' has been created and exists."
}
```

Congratulations, you have installed the SSH server on your Windows machine. And all without manually setting up a background service or modifying config files.

## Setting WSL as Default Shell

To directly boot into WSL when connecting, we need to change the default shell from `cmd.exe` or `PowerShell.exe` to `bash.exe`, which in turn runs the default WSL distribution. This can be done with the PowerShell command:

```PowerShell
New-ItemProperty -Path "HKLM:\SOFTWARE\OpenSSH" -Name DefaultShell -Value "C:\WINDOWS\System32\bash.exe" -PropertyType String -Force
```

**Note**: even though the shell is running on the Linux side, the SSH server is still on windows. This means you have to use to windows username to log in, and the SCP command copies files relative to the user directory on windows.

## Enable Key-based Authentication (non-Admin User)

**Note**: If the user account has Admin permissions, read the next chapter, otherwise continue reading.

Create the folder `.ssh` in the users home directory on windows: (e.g. `C:\Users\<username>\.ssh`). Run the following commands in PowerShell (not as administrator).

```PowerShell
New-Item -Path ~\.ssh -ItmeType "directory"
New-Item -Path ~\.ssh\authorized_keys
```

The file `.ssh\autzorized_keys` will contain a list of all public keys that shall be allowed to connect to the SSH server.

Copy the contents of your public key file (usually stored in `~/.ssh/id_rsa.pub`) to the `authorized_keys` file. If a key is already present, paste your key on a new line.

## Enable Key-based Authentication (Admin User)

If the user is in the Administrators group, it is not possible to have the `authorized_keys` file in the user directory for security purposes.
Instead, it needs to be located on the following path `%ProgramData%\ssh\administrators_authorized_keys`. A second requirement is that it is only accessible to Administrator users, to prevent a normal user from gaining admin permissions.

To create the file start PowerShell as administrator and run the following command.

```PowerShell
New-Item -Path $env:programdata\ssh\administrators_authorized_keys
```

This will create the file with the correct permissions. Now open the file and paste your public key into it. The public key should be located at `~/.ssh/id_rsa.pub`. If a key is already present, paste your key on a new line.

## Verifying everything works

Verify that you can SSH into your machine by running the following inside WSL:

```sh
IP=$(cat /etc/resolv.conf | grep nameserver | cut -d " " -f2) # get the windows host ip address
ssh <user>@$IP
```

Or from PowerShell and cmd:

```PowerShell
ssh <user>@localhost
```

## Drawbacks

There are some drawbacks to this approach. If you rely on some programs or scripts to work over SSH, this might not be the method for you. Most scripts expect a unix machine on the other end, or if they expect a windows machine they will most likely not be configured to deal with WSL.

If you however just want to connect to your pc to copy some files or change some settings this approach is perfectly fine.
