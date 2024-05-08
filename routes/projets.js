const express = require('express')
const ctrl_projects = require('../controlleurs/project')
const auth = require('../middleware/auth')

const routes = express.Router();



routes.get('', auth, ctrl_projects.get_projects)

module.exports = routes;