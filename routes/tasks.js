const express = require('express')
const routesTask = express.Router();
const ctrl_task = require('../controlleurs/task')



routesTask.get('', ctrl_task.get_task)

module.exports = routesTask;
