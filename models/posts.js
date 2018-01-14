const db = require('../db');
const ObjectID = require('mongodb').ObjectID;

exports.all = (cb) => {
  db.get().collection('posts').find().toArray( (err, docs) => {
    cb(err, docs);
  })
}

exports.findById = (id, cb) => {
  db.get().collection('posts').findOne(
    { id: id }, 
    (err, doc) => { 
      cb(err, doc);
    }
  )
}

exports.create = (artist, cb) => {
  db.get().collection('posts').insert(artist, (err, result) => {
    cb(err, result);
  });
}

/* exports.update = (id, newData, cb) => {
  db.get().collection('posts').updateOne(
    { _id: ObjectID(id) },
    { $set: newData },
    (err, result) => {
      cb(err, result);
    }
  );
} */

exports.delete = (id, cb) => {
  db.get().collection('posts').deleteOne(
    { id: id },
    (err, result) => {
      cb(err, result);
    }
  );
}