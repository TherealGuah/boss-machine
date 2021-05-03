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
    const allWorks = getAllFromDatabase('works');
    res.status(200).send(allWorks);
});

worksRouter.put('/:workId', (req, res, next) => {

});

worksRouter.post('/', (req, res, next) => {
    const newWork = addToDatabase('works', req.body);
    res.status(201).send(newWork);
});

worksRouter.delete('/:workId', (req, res, next) => {

});

module.exports = worksRouter;