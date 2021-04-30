const express = require('express');
const app = require('../server');
const apiRouter = express.Router();

const createMeeting = require('./db');

/*      '/api/minions'      */

// get all minions
app.get('/minions', );
// post new minion
app.post('/minions', );
// get single minion by Id
app.get('minions/:Id', );
// update minion by Id
app.put('minions/:Id', );
// delete minion by Id
app.delete('minions/:Id', );


/*      '/api/ideas'        */

// get all ideas
app.get('/ideas', );
// create new idea
app.post('/ideas', );
// get single idea by Id
app.get('/ideas/:Id', );
// update idea by Id
app.put('/ideas/:Id', );
// delete idead by Id
app.delete('/ideas/:Id', );

/*      '/api/meetings'        */

// get all meetings
app.get('/meetings', );
// create new meeting
app.post('/meetings', );
// delete all meetings
app.delete('/meetings', );
module.exports = apiRouter;
