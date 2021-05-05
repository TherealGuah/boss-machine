const express = require('express');
const meetingsRouter = express.Router();

const {
    createMeeting,
    getAllFromDatabase,
    deleteAllFromDatabase
} = require('./db');

/*      '/api/meetings'        */
meetingsRouter.use('/', (req, res, next) => {
    const allMeetings = getAllFromDatabase('meetings');
    req.allMeetings = allMeetings;
    next();
});
// get all meetings
meetingsRouter.get('/', (req, res, next) => {
    res.status(200).send(req.allMeetings);
});
// create new meeting
meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = createMeeting();
    req.allMeetings.push(newMeeting);
    res.status(201).send(newMeeting);
});
// delete all meetings
meetingsRouter.delete('/', (req, res, next) => {
    const deleted = deleteAllFromDatabase('meetings');
    if (!deleted) {
        res.status(500);
    } else {
        res.status(204);
    }
    res.send();
});

module.exports = meetingsRouter;