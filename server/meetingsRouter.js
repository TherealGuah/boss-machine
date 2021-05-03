const express = require('express');
const meetingsRouter = express.Router();

const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase
} = require('./db');

/*      '/api/meetings'        */

// get all meetings
meetingsRouter.get('/', (req, res, next) => {

});
// create new meeting
meetingsRouter.post('/', (req, res, next) => {

});
// delete all meetings
meetingsRouter.delete('/', (req, res, next) => {

});

module.exports = meetingsRouter;