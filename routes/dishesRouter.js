const express = require('express');
const dishRouter = express.Router()
dishRouter.route('/')
    .get((req, res) => {
        res.send('Will send all the dishes to you!');
    })
    .post((req, res) => {
        res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })

    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })
    .delete((req, res) => {
        res.end('Deleting all dishes');
    });

dishRouter.route('/:dishId')
    .get((req, res) => {
        res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /dishes/' + req.params.dishId);
    })
    .put((req, res) => {
        res.write('Updating the dish: ' + req.params.dishId + '\n');
        res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete((req, res) => {
        res.end('Deleting dish: ' + req.params.dishId);
    });

module.exports = dishRouter;
