'use strict';
const electron = require('electron'),
  app = electron.app,
  BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});


app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.webContents.openDevTools();
  

  let currentURL = mainWindow.webContents.getURL()
  
  console.log("rodnei");

  console.log(app.getAppPath());

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

    var Datastore = require('nedb')
  //const {app} = require('electron')
  //console.log(app.getAppPath());

    var db = new Datastore({ filename: '/Users/rodneicouto/myDb.db'});
    db.loadDatabase(function (e) {    // Callback is optional
    // Now commands will be executed
  });

  global.database = db;  

  var doc = { hello: 'world'
                 , n: 7
                 , today: new Date()
                 ,system: 'solar' 
                 , nedbIsAwesome: true
                 , fruits: [ 'asspple', 'orange', 'pear' ]
                 , infos: { name: 'nsedb' }
                 };

  db.insert(doc, function (err, newDoc) {   // Callback is optional
    console.log('inseriu ');
  });




});
