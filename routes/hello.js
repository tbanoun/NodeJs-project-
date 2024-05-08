const express = require('express')
const ctrl_hello = require('../controlleurs/hello')
const routes = express.Router();

routes.get('', ctrl_hello.helloWorld)

module.exports = routes;