const express = require('express');
const worksRouter = express.Router();

const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase
} = require('./db');

/* '/api/minions/:minionId/work */

worksRouter.get('/', (req, res, next) => {

});

worksRouter.post('/', (req, res, next) => {

});

worksRouter.put('/:workId', (req, res, next) => {

});

worksRouter.delete('/:workId', (req, res, next) => {

});

module.exports = worksRouter;