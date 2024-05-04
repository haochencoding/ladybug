let settings = require("Storage").readJSON("ladybug.settings.json",1);

const recorder = require('ladybug.dataRecorder.js');

function showMenu() {
  const menu = {
      '': { 'title': 'Ladybug' },
      '< Back': () => { load(); },
      'RECORD': {
          value: !!settings.recording,  // Convert the boolean to its boolean representation explicitly
          onchange: v => {
              settings.recording = v; // Set recording to the new value (v)
              console.log(`Recording status: ${settings.recording}`); // Output the current recording state to console
              require("Storage").writeJSON("ladybug.settings.json", settings); // Write the setting into the json
              if (settings.recording) {
                Bangle.setHRMPower(1);
                Bangle.setCompassPower(1);
                Bangle.on('HRM-raw', recorder);
              } else {
                Bangle.setHRMPower(0);
                Bangle.setCompassPower(0);
                Bangle.removeListener('HRM-raw', recorder);
              }
              if (WIDGETS["ladybug"]) {
                WIDGETS["ladybug"].reload(); // Reload the widget to reflect changes
              }
          }
      }
  };
  E.showMenu(menu);
}

g.clear();
Bangle.loadWidgets();
Bangle.drawWidgets();
showMenu();  // Show the menu when the app starts