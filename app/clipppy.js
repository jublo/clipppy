/* global __dirname */
var electron = require("electron"),
  app = electron.app,  // Module to control application life.
  BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.

// Report crashes to our server.
electron.crashReporter.start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on("window-all-closed", function() {
  app.quit();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on("ready", function () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    icon: "img/icon-128.icns",
    width: 124,
    height: 93,
    resizable: true,
    alwaysOnTop: true,
    skipTaskbar: true,
    show: false,
    frame: false,
    transparent: true,
    acceptFirstMouse: true
  });

  // and load the index.html of the app.
  mainWindow.loadURL("file://" + __dirname + "/clipppy.html");

  // show window after loaded
  mainWindow.showInactive();

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is moved.
  mainWindow.on("move", function () {
    mainWindow.webContents.executeJavaScript(
      "saveWindowPosition(" + mainWindow.getPosition().join(", ") + ")"
    );
  });

  // Emitted when the window is closed.
  mainWindow.on("closed", function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});
