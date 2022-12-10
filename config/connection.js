const mongoClient = require('mongodb').MongoClient
const state = {
  db: null
 }
module.exports.connect = (done) => {
  const url = 'mongodb://localhost:27017'
  const dbname = 'myDatabase'
  mongoClient.connect(url,(err, data)=>{
    if (err) 
      return done(err)
      // console.log();
    state.db = data.db(dbname)
    done()
  })
   
}

module.exports.get = ()=>{
  return state.db
}



// var MongoClient = require('mongodb').MongoClient;

// var url = "mongodb://localhost:27017/shopping";

// MongoClient.connect(url, function (err, client) {
//     var db = client.db('shopping');
//     if (err) throw err;

//     db.createCollection("customers", function (err, result) {
//         if (err) throw err;
//         console.log("database and Collection created!");
//         client.close();
//     });
// });

