const electron = require("electron");
let mainWindow = null;

electron.app.on("window-all-closed", () => { electron.app.quit(); });

electron.app.on("ready", () => {
  mainWindow = new electron.BrowserWindow({ width: 512, height: 384, useContentSize: true });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.on("closed", () => { mainWindow = null; });
});
