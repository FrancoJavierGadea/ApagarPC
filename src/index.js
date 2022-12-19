const {app, BrowserWindow, Menu} = require("electron");

let MainWindow;

app.on('ready', () => {

    Menu.setApplicationMenu(null);

    MainWindow = new BrowserWindow({

        width: 540,

        height: 360,

        resizable: false,

        fullscreenable: false,

        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    MainWindow.loadFile(`${__dirname}/views/main.html`);
});

app.on('window-all-closed', () => {

    app.quit();
})

