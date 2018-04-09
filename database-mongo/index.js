const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/mvp');

const db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const ticketSchema = mongoose.Schema({
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

const Ticket = mongoose.model('Ticket', ticketSchema);

const selectAll = function(callback) {
  Ticket.find({}, function(err, tickets) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, tickets);
    }
  });
};

const save = function(obj, callback) {
  return new Promise((resolve, reject) => {
    Ticket.create(obj, (err, ticket) => {
      if (err) {
        reject(err);
      } else {
        resolve(ticket);
      }
    });
  });
};

const update = (id, obj) => {
  return new Promise((resolve, reject) => {
    Ticket.findById(id)
      .then((t) => {
        t.set(obj);
        t.save((err, ticket) => {
          if (err) {
            reject(err);
          } else {
            resolve(ticket);
          }
        });
      })
  });
}

module.exports.selectAll = selectAll;
module.exports.save = save;
module.exports.update = update;
