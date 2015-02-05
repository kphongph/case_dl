var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

app.use(loopback.favicon());

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname);

var path = require('path');
app.use(loopback.static(path.resolve(__dirname, '../client')));

app.use(loopback.urlNotFound());

// The ultimate error handler.
app.use(loopback.errorHandler());

  
if (require.main === module) {
    app.start();
}
