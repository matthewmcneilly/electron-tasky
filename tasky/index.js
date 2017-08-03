const electron = require('electron');

const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow  = new BrowserWindow({
    height: 500,
    width: 300,
    // Removes everything bar the view
    //frame: false,
    // Dont allow user to resize window
   resizeble: false
  });
  mainWindow.loadURL('file://${_dirname}/src/index.html');
});
