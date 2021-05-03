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
minionsRouter.param('minionId', (req, res, next, id) => {

    const minion = getFromDatabaseById('minions', id);
        
    if (!minion) {
        res.status(404).send();
    } else {
        req.minion = minion;
        req.id = id;
        next();
    }    
});
// get all minions
minionsRouter.get('/', (req, res, next) => {
    const allMinions = getAllFromDatabase('minions');
    res.status(200).send(allMinions);
});
// get single minion by Id
minionsRouter.get('/:minionId', (req, res, next) => {
    res.status(200).send(req.minion);
});

// update minion by Id
minionsRouter.put('/:minionId', (req, res, next) => {
    const updatedMinion = updateInstanceInDatabase('minions', req.body);
    res.status(200).send(updatedMinion);
});

// post new minion
minionsRouter.post('/', (req, res, next) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
});

// delete minion by Id
minionsRouter.delete('/:minionId', (req, res, next) => {
    
    const deleted = deleteFromDatabasebyId('minions', req.id);
    if (!deleted) {
        res.status(500);
    } else {
        res.status(204);
    }  
    res.send();
});

module.exports = minionsRouter;