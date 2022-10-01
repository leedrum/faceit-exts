<img src="src/icon128.png" width="128"/>

# Faceit Exts

<img valign="middle" src="https://img.shields.io/chrome-web-store/v/blncihpjdpcjlkkfcmdkbdonkcpbenpp?label=%20"> <img valign="middle" src="https://img.shields.io/chrome-web-store/users/blncihpjdpcjlkkfcmdkbdonkcpbenpp"> <img valign="middle" src="https://img.shields.io/chrome-web-store/rating/blncihpjdpcjlkkfcmdkbdonkcpbenpp">

Faceit Exts inspried from Faceit Enhancer. @timche\_ haven't maintained it for a long time. So have many bugs, and features that need to fix/add.
I tried to fix it temporarily but so hard to push the extension files to everyone so I tried to code a new extension and publish it to the chrome store and Firefox Addon to make u guys be able to update the extension directly.

## Features

- Show level process
- Show Elo Estimation for cometitive matchs
- Show Elo change in match history (stats)
- Show Ban history
- Auto accept invite
- Auto Close modal when match end

Please open up an issue to nudge me to update extension.

## Installing and Running

### For normal user (in-comming)

1. [Chrome store](https://chrome.google.com/webstore/detail/faceit-exts/blncihpjdpcjlkkfcmdkbdonkcpbenpp)

2. Firefox Add-on

- Download [ZipFile](https://github.com/leedrum/faceit-exts/releases/download/v1.0.0/faceit-exts-firefox.zip)
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

[@leedrum](https://github.com/leedrum) | [Website](https://arrow-silver.xyz)
