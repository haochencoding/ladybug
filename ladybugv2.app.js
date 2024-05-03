let settings = {
  recording: false
};

const recorder = require('ladybug.recorder.js');

function showMenu() {
  const menu = {
      '': { 'title': 'Ladybug' },
      '< Back': () => { load(); },  // Assuming 'load' is a function that handles the back action
      'RECORD': {
          value: !!settings.recording,  // Convert the boolean to its boolean representation explicitly
          onchange: v => {
              settings.recording = v; // Set recording to the new value (v)
              console.log(`Recording status: ${settings.recording}`); // Output the current recording state to console
              if (settings.recording) {
                Bangle.setHRMPower(1);
                Bangle.setCompassPower(1);
                Bangle.on('HRM-raw', recorder);
              } else {
                Bangle.setHRMPower(0);
                Bangle.setCompassPower(1);
                Bangle.removeListener('HRM-raw', recorder);
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