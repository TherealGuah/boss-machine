const express = require('express');
const ideasRouter = express.Router();
const checkMillionDollarIdea = require('./checkMillionDollarIdea');
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
ideasRouter.param('ideaId', (req, res, next, id) => {

    const idea = getFromDatabaseById('ideas', id);
        
    if (!idea) {
        res.status(404).send();
    } else {
        req.idea = idea;
        req.id = id;
        next();
    }    
});
// get all ideas
ideasRouter.get('/', (req, res, next) => {
    const allIdeas = getAllFromDatabase('ideas');
    res.status(200).send(allIdeas);
});
// get single idea by Id
ideasRouter.get('/:ideaId', (req, res, next) => {
    res.status(200).send(req.idea);
});
// update idea by Id
ideasRouter.put('/:ideaId', (req, res, next) => {
    const updatedIdea = updateInstanceInDatabase('ideas', req.body);
    res.status(200).send(updatedIdea);
});
// create new idea
ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body);
    res.status(201).send(newIdea);
});
// delete idead by Id
ideasRouter.delete('/:ideaId', (req, res, next) => {
    
    const deleted = deleteFromDatabasebyId('ideas', req.id);
    if (!deleted) {
        res.status(500);
    } else {
        res.status(204);
    }  
    res.send();
});

module.exports = ideasRouter;