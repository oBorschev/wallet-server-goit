var ObjectID = require("mongodb").ObjectID;
var db = require("../db/db");
const MongoClient = require("mongodb").MongoClient;

exports.getAllCosts = function(res) {
  console.log(db.get());
  db.get()
    .collection("costs")
    .find()
    .toArray(function(err, result) {
      console.log(res);
      res(err, result);
    });
};

exports.create = function(req, res) {
  db.get()
    .collection("costs")
    .insertOne(req, (err, result) => {
      if (err) {
        console.log(err);
        console.log("ERROR");
      }
      console.log("Created OK");
      res(err, result);
    });
};

exports.findById = function(id, res) {
  db.get()
    .collection("costs")
    .findOne({ _id: ObjectID(id) }, function(err, doc) {
      res(err, doc);
    });
};

exports.update = function(id, newData, res) {
  db.get()
    .collection("costs")
    .updateOne({ _id: ObjectID(id) }, newData, function(err, result) {
      res(err, result);
    });
};

exports.delete = function(id, cb) {
  db.get()
    .collection("artists")
    .deleteOne({ _id: ObjectID(id) }, function(err, result) {
      cb(err, result);
    });
};
