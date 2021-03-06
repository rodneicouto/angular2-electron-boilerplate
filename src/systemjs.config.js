(function(global) {

  // map tells the System loader where to look for things
  var map = {
      'app': 'app',
      'rxjs': 'assets/js/vendor/rxjs',
      'angular2-in-memory-web-api': 'assets/js/vendor/angular2-in-memory-web-api',
      '@angular': 'assets/js/vendor/@angular',
      'ng2-bootstrap': 'assets/js/vendor/ng2-bootstrap',
      'moment': 'assets/js/vendor/moment',

  };
  
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
      'app': {
          main: 'boot.js',
          defaultExtension: 'js'
      },
      'rxjs': {
          defaultExtension: 'js'
      },
      'angular2-in-memory-web-api': {
          defaultExtension: 'js'
      }
  };

  var packageIndexJS = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/forms',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/upgrade',
    'core-js'
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageIndexJS.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });
  
var packagesName = [
  'moment',
  'ng2-bootstrap'
];

packagesName.forEach((pkg) => {
  packages[`${pkg}`] = {main: `${pkg}.js`, defaultExtension: 'js'};
});

  var config = {
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
