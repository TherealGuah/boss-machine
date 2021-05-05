const express = require('express');
const workRouter = express.Router();

const { getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    updateWorkById,
} = require('./db');

/* '/api/minions/:minionId/work */
workRouter.param('minionId', (req, res, next, minionId) => {

    const minion = getFromDatabaseById('minions', minionId);
        
    if (!minion) {
        res.status(404).send();
    } else {
        req.minion = minion;
        req.minionId = minionId;
        next();
    }    
});

workRouter.param('workId', (req, res, next, workId) => {

    const work = getFromDatabaseById('work', workId);
        
    if (!work) {
        res.status(404).send();
    } else {
        req.work = work;
        req.workId = workId;
        next();
    }    
});


workRouter.get('/:minionId/work', (req, res, next) => {
        
        const allWorks = getAllFromDatabase('work');
       
        const filteredWork = allWorks.filter( work =>  work.minionId === req.minionId);
        
        res.status(200).send(filteredWork);
});

workRouter.put('/:minionId/work/:workId', (req, res, next) => {
    
    
    if (req.workId !== req.minionId) {
        res.status(400).send();   
    } else {
        const updatedWork = updateInstanceInDatabase('work', req.body);
        res.status(200).send(updatedWork);
    }  
    
});

workRouter.post('/:minionId/work', (req, res, next) => {
    const newWork = addToDatabase('work', req.body);
    res.status(201).send(newWork);
});

workRouter.delete('/:minionId/work/:workId', (req, res, next) => {
    const work = deleteFromDatabasebyId('work', req.workId);
    if (!work) {
        res.status(500).send();
    } else {
        res.status(204).send(work);
    }  
});

module.exports = workRouter;