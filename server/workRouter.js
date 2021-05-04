const express = require('express');
const workRouter = express.Router();

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
workRouter.param('minionId', (req, res, next, id) => {

    const minion = getFromDatabaseById('minions', id);
        
    if (!minion) {
        res.status(404).send();
    } else {
        req.minion = minion;
        req.minionId = id;
        next();
    }    
});

workRouter.param('workId', (req, res, next, id) => {

    const work = getFromDatabaseById('work', id);
        
    if (!work) {
        res.status(404).send();
    } else {
        req.work = work;
        req.workId = id;
        next();
    }    
});


workRouter.get('/:minionId/work', (req, res, next) => {
    const allWorks = getAllFromDatabase('work');
    res.status(200).send(allWorks);
});

workRouter.put('/:minionId/work/:workId', (req, res, next) => {
    const updatedWork = updateInstanceInDatabase('work', req.body);
    res.status(200).send(updatedWork);
});

workRouter.post('/:minionId/work', (req, res, next) => {
    const newWork = addToDatabase('work', req.body);
    res.status(201).send(newWork);
});

workRouter.delete('/:minionId/work/:workId', (req, res, next) => {

});

module.exports = workRouter;