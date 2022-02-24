## The Taller Shorter Ireland Quiz

A quiz that asks players random questions relating to the Tallest and Shortest phenomena in Ireland. 

The quiz is designed to test the knowledge of the user by giving them four options. The concept is to make the user think of the concept of "tallest and shortest" as not just a human concept but a physical one too. The quiz alos will concentrate on lesser known areas of Ireland.


![A19341BD-2D44-44C3-8DE1-838E4C7052ED_4_5005_c](https://user-images.githubusercontent.com/96124619/155520186-f9d02ea7-25b5-4a9c-8795-f3a753b836a2.jpeg)

## Features

The game has 5 distinct features

### The Question Area

![1D07B734-5382-401D-B9FF-24C70BED9631_4_5005_c](https://user-images.githubusercontent.com/96124619/155521472-d404bdb6-e2fd-4e33-991f-48894f5c53e0.jpeg)

This area is where the questions are displayed. The player will get an alternative question each time based on asking them is something (a physical feature, distance etc) Taller or Shorter. Each question is devised as to make the user think about different geographical regions of Ireland in urban and rural areas. 

### The Mutiple Choice Answer Area

![C0A8F3B5-8FC7-46E8-A387-48C7F6876201_4_5005_c](https://user-images.githubusercontent.com/96124619/155522272-c4dffa6a-d481-4435-a19e-afe3c22c42ce.jpeg)

This section give the use an option of four answers. When the user clicks on the option they wish to choose it is highlighted in gold and the rest of the options are turned green. The options are sometimes based on aliteration eg, Limerick, Laois, Longford, Letrim to make the player iteract and think more about the answer. Also as it's geographically based the options will be either natiowide or actuall locations within the questions area. 

### Area to show user to press "check" or "next"

![5D3BDAF4-5535-456D-9213-7C68BE717F0A_4_5005_c](https://user-images.githubusercontent.com/96124619/155523294-a47bbbb4-101b-4a20-ab14-8fe59ce7cc92.jpeg)

This section is to direct the player to check their answer to see if they are correct.

### The "check" & "next" area

![AE240F07-10C9-49F2-AC81-D3ACCDAA3FD1_4_5005_c](https://user-images.githubusercontent.com/96124619/155523400-49087f4e-2390-4dc1-9185-e0f1dbff3748.jpeg)

The "check" & "next" area has two buttons. When the "check" button is pressed it will reveal True or False in the results tab area. When the "next" tab is pressed its allows the player to move on and answer the next question.

### The Results Tab



`python3 -m http.server`

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to *Account Settings* in the menu under your avatar.
2. Scroll down to the *API Key* and click *Reveal*
3. Copy the key
4. In Gitpod, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you so do not share it. If you accidentally make it public then you can create a new one with _Regenerate API Key_.

------

## Release History

We continually tweak and adjust this template to help give you the best experience. Here is the version history:

**September 1 2021:** Remove `PGHOSTADDR` environment variable.

**July 19 2021:** Remove `font_fix` script now that the terminal font issue is fixed.

**July 2 2021:** Remove extensions that are not available in Open VSX.

**June 30 2021:** Combined the P4 and P5 templates into one file, added the uptime script. See the FAQ at the end of this file.

**June 10 2021:** Added: `font_fix` script and alias to fix the Terminal font issue

**May 10 2021:** Added `heroku_config` script to allow Heroku API key to be stored as an environment variable.

**April 7 2021:** Upgraded the template for VS Code instead of Theia.

**October 21 2020:** Versions of the HTMLHint, Prettier, Bootstrap4 CDN and Auto Close extensions updated. The Python extension needs to stay the same version for now.

**October 08 2020:** Additional large Gitpod files (`core.mongo*` and `core.python*`) are now hidden in the Explorer, and have been added to the `.gitignore` by default.

**September 22 2020:** Gitpod occasionally creates large `core.Microsoft` files. These are now hidden in the Explorer. A `.gitignore` file has been created to make sure these files will not be committed, along with other common files.

**April 16 2020:** The template now automatically installs MySQL instead of relying on the Gitpod MySQL image. The message about a Python linter not being installed has been dealt with, and the set-up files are now hidden in the Gitpod file explorer.

**April 13 2020:** Added the _Prettier_ code beautifier extension instead of the code formatter built-in to Gitpod.

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

------

## FAQ about the uptime script

**Why have you added this script?**

It will help us to calculate how many running workspaces there are at any one time, which greatly helps us with cost and capacity planning. It will help us decide on the future direction of our cloud-based IDE strategy.

**How will this affect me?**

For everyday usage of Gitpod, it doesn’t have any effect at all. The script only captures the following data:

- An ID that is randomly generated each time the workspace is started.
- The current date and time
- The workspace status of “started” or “running”, which is sent every 5 minutes.

It is not possible for us or anyone else to trace the random ID back to an individual, and no personal data is being captured. It will not slow down the workspace or affect your work.

**So….?**

We want to tell you this so that we are being completely transparent about the data we collect and what we do with it.

**Can I opt out?**

Yes, you can. Since no personally identifiable information is being captured, we'd appreciate it if you let the script run; however if you are unhappy with the idea, simply run the following commands from the terminal window after creating the workspace, and this will remove the uptime script:

```
pkill uptime.sh
rm .vscode/uptime.sh
```

**Anything more?**

Yes! We'd strongly encourage you to look at the source code of the `uptime.sh` file so that you know what it's doing. As future software developers, it will be great practice to see how these shell scripts work.

---

Happy coding!
