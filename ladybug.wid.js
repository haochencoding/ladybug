(() => {
  // Load settings, dataRecorder module, and image
  let settings = require("Storage").readJSON("ladybug.settings.json",1);
  const recorder = require("ladybug.dataRecorder.js");
  const icon = atob("GBiDAf//////////////////x/////////x////////////+P/////////wAP////////+AAB//////+P+AAB///////x+AAAP+P////wAJAJBx/////xAJAJIB///x/5IJBJIB///+OAJJBJJB////xAJIBIBIAP//xJJIBIJIP///xJBJBJJIP///xIBJAJIIP///xJJJABIAP///+BJIAJJIP//wABJABJJJ/////5JABJBBx////xAIBIAP/////+AIPIB///////+AOB////////////////w==");

  // add widget
  WIDGETS["ladybug"] = {
    area: "tl",
    width: 24,
    draw: function() {
      g.reset(); // reset the graphics context to defaults (color/font/etc)
      if (settings.recording) {
        g.drawImage(icon, this.x+6, this.y);
        Bangle.on('HRM-raw', recorder);
        Bangle.setHRMPower(1, 'ladybug');
        Bangle.setCompassPower(1, 'ladybug');
      } else {
        Bangle.removeListener('HRM-raw', recorder);
        Bangle.setHRMPower(0, 'ladybug');
        Bangle.setCompassPower(0, 'ladybug');
      }
    },
    reload: function() {
      settings = require("Storage").readJSON("ladybug.settings.json",1) || { recording: false };
      Bangle.drawWidgets(); //redraw all widgets
    }
  };
})();
