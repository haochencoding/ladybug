# Introduction
This repository contains the source code for a smart watch app - ladybug. The app is built to collect heart rate and movement data using Bangle.js2. The version 1 is built by [rajeevmsn](https://github.com/rajeevmsn), and the version 2 is improved by [haochencoding](https://github.com/haochencoding). 

The version 1 app does not have user interface, which provide minimal distractions for the users. 

The version 2 app is a widget, and it collects heart rate and movement data in the background. This improvement allows users to record data while run other apps. This version also includes a clock info card for users to control recording status on the clock interface.

# How to use 

## Version 1
Upload following files of version1 folder to Bangle.js:
- ladybug.app.js
- ladybug.img
- ladybug.info

After uploading, please load the ladybug app on the app laucher on the watch.

## Version 2
Upload following files of version2 folder to Bangle.js:
- ladybug.app.js
- ladybug.clkinfo.js
- ladybug.dataRecorder.js
- ladybug.img
- ladybug.info
- ladybug.settings.json
- ladybug.wid.js

After uploading, please load the ladybug app on the watch. Tick record to start recording.

## Version 2.1
Version ready to be published on Bangle.Js app store. Same functionality to version 2. 

# Reference
The version 2 app is built based on the logic of the Recorder Bangle app, see [GitHub link](https://github.com/espruino/BangleApps/tree/master/apps/recorder)