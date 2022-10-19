<img src="src/icon128.png" width="128"/>

# Faceit Exts

[![Build](https://github.com/leedrum/faceit-exts/actions/workflows/webpack.yml/badge.svg)](https://github.com/leedrum/faceit-exts/actions/workflows/webpack.yml) [![CS:GO](https://img.shields.io/badge/game-CS%3AGO-yellow.svg)](https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/) [![Javascript](https://img.shields.io/badge/language-Javascript-%23f34b7d.svg)]()

- [Chrome](https://chrome.google.com/webstore/detail/faceit-exts/blncihpjdpcjlkkfcmdkbdonkcpbenpp) <img valign="middle" src="https://img.shields.io/chrome-web-store/v/blncihpjdpcjlkkfcmdkbdonkcpbenpp?label=%20"> <img valign="middle" src="https://img.shields.io/chrome-web-store/users/blncihpjdpcjlkkfcmdkbdonkcpbenpp"> <img valign="middle" src="https://img.shields.io/chrome-web-store/rating/blncihpjdpcjlkkfcmdkbdonkcpbenpp">

- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/faceit-exts/) <img valign="middle" src="https://img.shields.io/amo/v/faceit-exts?label=%20"> <img valign="middle" src="https://img.shields.io/amo/users/faceit-exts"> <img valign="middle" src="https://img.shields.io/amo/rating/faceit-exts">

Faceit Exts inspried from Faceit Enhancer. [@timche\_](https://github.com/timche) haven't maintained it for a long time. So have many bugs, and features that need to fix/add.
I tried to fix it temporarily but so hard to push the extension files to everyone so I tried to code a new extension and publish it to the chrome store and Firefox Addon to make you guys be able to update the extension directly.

## Features

- Show level process
- Show Elo Estimation for cometitive matchs
- Show Elo Estimation for hub's match
- Show Elo change in match history (stats)
- Show Ban history
- Auto accept invite
- Auto Close modal when match end
- Auto copy server data
- Auto connect to server
- Auto Veto maps (at this time have only UI)

Please open up an issue to nudge me to update extension.

## Installing and Running

### For normal user

- Use the link below to install
- [Chrome store](https://chrome.google.com/webstore/detail/faceit-exts/blncihpjdpcjlkkfcmdkbdonkcpbenpp)
- [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/faceit-exts/)

### For normal user but manually

1. [Chrome store](https://chrome.google.com/webstore/detail/faceit-exts/blncihpjdpcjlkkfcmdkbdonkcpbenpp)

- Use Extension from store using the link above or follow the steps below manually
- Download `faceit-exts.zip` from [releases](https://github.com/leedrum/faceit-exts/releases)
- Unzip file the `ZipFile`
- Go `chrome://extensions/`
- Enable `Developer mode` on the right side
- Click on `Load unpacked`
- Choose folder unziped

2. [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/faceit-exts/)

- Use Extension from add-on store using the link above or follow the steps below manually
- Download `faceit-exts-firefox.zip` from [releases](https://github.com/leedrum/faceit-exts/releases)
- Unzip file the `ZipFile`
- Go `about:debugging#/runtime/this-firefox`
- Click on `Load Temporary Add-on`
- Choose `faceit-exts-firefox.zip`

### For developer

1. Check if your [Node.js](https://nodejs.org/) version is >= **14**.
2. Clone this repository.
3. Run `npm install` to install the dependencies.
4. Run `npm start`
5. Load your extension on Chrome following:
   1. Access `chrome://extensions/`
   2. Check `Developer mode`
   3. Click on `Load unpacked extension`
   4. Select the `build` folder.
6. Happy coding.

## TechStack

- Manifest V3 / V2 for Firefox
- Material UI
- React v17
- Webpack 4.x
- TypeScript

## Resources:

- [Template Extension](https://github.com/lxieyang/chrome-extension-boilerplate-react/)
- [Inspried from Faceit Enhancer](https://github.com/faceit-enhancer/faceit-enhancer)

---

Author: [@leedrum](https://github.com/leedrum) | [Website](https://arrow-silver.xyz)
