const Posts = require('../models/posts');

exports.all = (req, res) => {
  Posts.all(
  (err, result) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.send(result);
    }
  )
}

exports.findById = (req, res) => {
  Posts.findById(
    req.params.id, 
    (err, result) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.send(result);
    }
  )
}

exports.create = (req, res) => {
  let post = {
    id: req.body.id,
    title: req.body.title,
    categories: req.body.categories,
    content: req.body.content
  };
  Posts.create(post, 
    (err, result) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.send(post);
    }
  )
}

/* exports.update = (req, res) => {
  Posts.update(
    req.params.id,
    { name: req.body.name },
    (err, result) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.sendStatus(200);
    }
  )
} */

exports.delete = (req, res) => {
  Posts.delete(
    req.params.id,
    (err, result) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.send(result);
    }
  )
}