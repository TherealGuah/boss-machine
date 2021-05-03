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

worksRouter.get('/:minionId/work', (req, res, next) => {
    const allWorks = getAllFromDatabase('work');
    res.status(200).send(allWorks);
});

worksRouter.put('/:minionId/work/:workId', (req, res, next) => {

});

worksRouter.post('/:minionId/work', (req, res, next) => {
    const newWork = addToDatabase('work', req.body);
    res.status(201).send(newWork);
});

worksRouter.delete('/:minionId/work/:workId', (req, res, next) => {

});

module.exports = worksRouter;