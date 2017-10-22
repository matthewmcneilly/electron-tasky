const electron = require('electron');

const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 500,
    width: 300,
    frame: false, // Remove the window toolbar
    resize: false // Prevent user from resizing window 
  });
  mainWindow.loadURL(`file://${__dirname}/src/index.html`);
});
