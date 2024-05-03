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
              console.log(settings.recording); // Output the current recording state to console
              recorder();
          }
      }
  };
  E.showMenu(menu);
Bangle.drawWidgets();
}

g.clear();
Bangle.loadWidgets();
showMenu();  // Show the menu when the app starts