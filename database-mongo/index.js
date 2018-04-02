var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/mvp');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var ticketSchema = mongoose.Schema({
  headline: String,
  description: String,
  createdAt: Date,
  priority: String,
  category: String,
  name: String,
  email: String,
  supportEmployeeId: Number,
  status: String,
  history: String,
  resolved: Boolean,
  resolvedAt: Date,
});

var Ticket = mongoose.model('Ticket', ticketSchema);



var selectAll = function(callback) {
  Ticket.find({}, function(err, tickets) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, tickets);
    }
  });
};

var selectOne = function(callback) {
  // TODO finish writing
  Ticket.find({_id: id}, function(err, tickets) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, tickets);
    }
  });
};

var save = function(obj, callback) {
  // TODO flesh out
  console.log('Mongoose: saving record...');
  Ticket.create(obj, (err, ticket) => {
    if (err) console.log('Mongoose: error creating document\n', err);
    else console.log('Mongoose: creating document...');
  });
};

module.exports.selectAll = selectAll;
module.exports.save = save;