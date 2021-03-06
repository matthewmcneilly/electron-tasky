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
  tray = new Tray(iconPath); // uses Tray class/constructor 
  tray.on('click', (event, bounds) => {

    // Click event bounds
    // console.log(bounds.x, bounds.y)
    const { x, y } = bounds;

    // Window height and width
    // Uses the height and width as defined above in app.on('ready'), just in case it gets changed
    const { height, width } = mainWindow.getBounds();

    if (mainWindow.isVisible()) {
      mainWindow.hide(); // When tray icon clicked, hide if shown
    } else {
      // Position window under the tray icon, y position is different depending on OS
      const yPosition = process.platform === 'darwin' ? y : Y - height;
      mainWindow.setBounds({
        x: x - width / 2,
        y: yPosition,
        height, // Same as height : height, condensed using ES6
        width
      });
      mainWindow.show(); // WHen tray icon clicked, show if hidden
    }
  });
});
