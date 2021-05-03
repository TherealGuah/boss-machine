const express = require('express');
const ideasRouter = express.Router();

const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase
} = require('./db');

/*      '/api/ideas'        */

// get all ideas
ideasRouter.get('/', (req, res, next) => {

});
// create new idea
ideasRouter.post('/', (req, res, next) => {

});
// get single idea by Id
ideasRouter.get('/:ideaId', (req, res, next) => {

});
// update idea by Id
ideasRouter.put('/:ideaId', (req, res, next) => {

});
// delete idead by Id
ideasRouter.delete('/:ideaId', (req, res, next) => {

});

module.exports = ideasRouter;