var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var db = require('../database-mongo');

var app = express();

app.use(bodyParser.json());

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
  db.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/api/tickets/:id', function (req, res) {
  // TODO implement getting info from one ticket
  db.selectOne(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

// app.post('/api/tickets', function (req, res) {
//   console.log('received API POST request...\n', req);
//   tickets.save(req.body, function(err) {
//     if(err) {
//       res.sendStatus(500);
//     }
//     res.sendStatus(200);
//   });
// });

app.post('/api/tickets', (request, response) => {
  console.log('express: received POST req, body:\n', request.body);      // your JSON
  db.save(request.body)
    .then(data => response.json(data))
    .catch((err) => response.sendStatus(500));
});

// app.get('/submit', function (req, res) {

// });

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

