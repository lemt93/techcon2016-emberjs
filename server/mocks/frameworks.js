/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var frameworksRouter = express.Router();

  frameworksRouter.get('/', function(req, res) {
    res.send({
      'frameworks': [
        {
          id: 1,
          name: 'Ember.js',
          logo: 'ember.png',
          dependencies: [1, 2]
        },
        {
          id: 2,
          name: 'React',
          logo: 'react.png',
          dependencies: [3, 4]
        },
        {
          id: 3,
          name: 'Angular 2',
          logo: 'angular.png'
        }
      ]
    });
  });

  frameworksRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  frameworksRouter.get('/:id', function(req, res) {
    var dependencies = {
      1: [1, 2],
      2: [3, 4],
      3: [1, 2, 3, 4, 5]
    };

    res.send({
      'frameworks': {
        id: req.params.id,
        dependencies: dependencies[req.params.id]
      }
    });
  });

  frameworksRouter.put('/:id', function(req, res) {
    res.send({
      'frameworks': {
        id: req.params.id
      }
    });
  });

  frameworksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/frameworks', require('body-parser').json());
  app.use('/api/frameworks', frameworksRouter);
};
