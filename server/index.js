var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var tickets = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use('/:page', express.static(__dirname + '/../react-client/dist'));
app.use('/dashboard/:ticket', express.static(__dirname + '/../react-client/dist'));
app.use('/check-ticket-status/:ticket', express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.get('/api/tickets', function (req, res) {
  tickets.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/api/tickets/:id', function (req, res) {
  // TODO implement getting info from one ticket
  tickets.selectOne(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/api/tickets', function (req, res) {
  tickets.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

// app.get('/submit', function (req, res) {

// });

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

