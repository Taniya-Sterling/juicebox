const express = require('express');
const apiRouter = express.Router();

const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);

// const postsRouter = require('./posts');
// apiRouter.use('/posts', postsRouter); needs part3

// const tagsRouter = require('./tags');
// apiRouter.use('/tags', tagsRouter);

module.exports = apiRouter;