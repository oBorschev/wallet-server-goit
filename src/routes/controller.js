const costs = require("../models/costs_db");

exports.getCost = function(req, res) {
  costs.getAllCosts(function(err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(result);
  });
};

exports.createCost = function(req, res) {
  if (!req.body) res.sendStatus(400);
  const cost = req.body;

  costs.create(cost, function(err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(cost);
  });
};

exports.getCostsById = function(id, res) {
  const getId = id.params.id;

  costs.findById(getId, function(err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(result);
  });
};

exports.patchCost = function(req, res) {
  const getId = req.params.id;
  const cost = req.body;
  console.log(cost);
  costs.update(getId, { $set: cost }, function(err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
    console.log("Updated OK!");
  });
};
exports.deleteCost = function(id, res) {
  const getId = id.params.id;
  costs.delete(getId, (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
    console.log("Deleted OK!");
  });
};
