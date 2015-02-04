var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

var dataSource = app.dataSources.caseDs;

var table = process.argv[2];

dataSource.discoverSchema(table, {schema: 'dbo'},
    function(err, schema) {
  if (err) throw err;

  console.log(JSON.stringify(schema, null, '  '));

  dataSource.disconnect();
});
