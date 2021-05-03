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


});

// post new minion
minionsRouter.post('/', (req, res, next) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
});

// delete minion by Id
minionsRouter.delete('/:minionId', (req, res, next) => {

});

module.exports = minionsRouter;