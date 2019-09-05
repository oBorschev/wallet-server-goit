const MongoClient = require("mongodb").MongoClient;

const state = {
  db: null
};
exports.connect = function(url, done) {
  if (state.db) {
    return done();
  }

  MongoClient.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      if (err) {
        console.log(err);
        console.log("ERROR");
      }
      state.db = client.db("Clusters");
      done();
    }
  );
};

exports.get = function() {
  return state.db;
};
