const express = require('express');
const bodyParser = require('body-parser');

const db = require('../database-mongo');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/:page', express.static(__dirname + '/../react-client/dist'));
app.use('/dashboard/:ticket', express.static(__dirname + '/../react-client/dist'));
app.use('/check-ticket-status/:ticket', express.static(__dirname + '/../react-client/dist'));


app.get('/', (req, res) => {
  res.redirect('/submit');
});

// Get all tickets
app.get('/api/tickets', function (req, res) {
  db.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

// Get info for one ticket, implement for ''
// app.get('/api/tickets/:id', function (req, res) {
//   db.selectOne(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

// Create a new ticket
app.post('/api/tickets', (request, response) => {
  db.save(request.body)
    .then(data => response.json(data))
    .catch(err => response.sendStatus(500));
});

// Update an existing ticket
app.put('/api/tickets', (request, response) => {
  db.update(request.body._id, request.body)
    .then(data => response.json(data))
    .catch((err) => response.sendStatus(500));
});

app.listen(PORT, function() {
  console.log(`Express: listening on port ${PORT}!`);
});

