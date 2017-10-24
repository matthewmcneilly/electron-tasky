const path = require('path'); // Cross platform node path module
const electron = require('electron');

const { app, BrowserWindow, Tray } = electron;

let mainWindow;
let tray;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 500,
    width: 300,
    frame: false, // Remove the window toolbar
    resize: false, // Prevent user from resizing window
    show: false // Hide window by default
  });
  mainWindow.loadURL(`file://${__dirname}/src/index.html`); //__dirname is current working directory

  // Select appropiate icon for the os
  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
  // Path module abstracts out operating system difference in paths then joins appropiate icon to the path
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);
  tray = new Tray(iconPath);
  tray.on('click', () => {
    if (mainWindow.isVisible()) {
      mainWindow.hide(); // When tray icon clicked, hide if shown
    } else {
      mainWindow.show(); // WHen tray icon clicked, show if hidden 
    }
  });
});
