const express = require('express');
const apiRouter = express.Router();

const minionsRouter = require('./minionsRouter');
const ideasRouter = require('./ideasRouter');
const meetingsRouter = require('./meetingsRouter');
const workRouter = require('./workRouter');

apiRouter.use('/minions', minionsRouter);
apiRouter.use('/ideas', ideasRouter);
apiRouter.use('/meetings', meetingsRouter);
// base routing for /api/minions/:minionId/work
apiRouter.use('/minions', workRouter);

module.exports = apiRouter;
