const express = require('express');
const minionsRouter = express.Router();

const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase
} = require('./db');

/*      '/api/minions'      */
minionsRouter.param('/:minionsId', (req, res, next, id) => {});


// get all minions
minionsRouter.get('/', (req, res, next) => {
    const allMinions = getAllFromDatabase('minions');
    res.status(200).send(allMinions);
});
// post new minion
minionsRouter.post('/', (req, res, next) => {

});
// get single minion by Id
minionsRouter.get('/:minionId', (req, res, next) => {

});
// update minion by Id
minionsRouter.put('/:minionId', (req, res, next) => {

});
// delete minion by Id
minionsRouter.delete('/:minionId', (req, res, next) => {

});

module.exports = minionsRouter;