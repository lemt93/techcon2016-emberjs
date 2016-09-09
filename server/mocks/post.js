/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var postRouter = express.Router();

  postRouter.get('/', function(req, res) {
    res.send({
      'post': []
    });
  });

  postRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postRouter.get('/:id', function(req, res) {
    res.send({
      'post': {
        id: req.params.id
      }
    });
  });

  postRouter.put('/:id', function(req, res) {
    res.send({
      'post': {
        id: req.params.id
      }
    });
  });

  postRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/post', require('body-parser').json());
  app.use('/api/post', postRouter);
};
