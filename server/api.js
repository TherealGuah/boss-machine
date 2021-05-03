const express = require('express');
const apiRouter = express.Router();

const minionsRouter = require('./minionsRouter');
const ideasRouter = require('./ideasRouter');
const meetingsRouter = require('./meetingsRouter');
const worksRouter = require('./worksRouter');

apiRouter.use('/minions', minionsRouter);
apiRouter.use('/ideas', ideasRouter);
apiRouter.use('/meetings', meetingsRouter);
apiRouter.use('/:minionId/work', worksRouter);

module.exports = apiRouter;
