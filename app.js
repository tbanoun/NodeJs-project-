const express = require('express');
const app = express();
const routeProject = require('./routes/projets')
const routeTask = require('./routes/tasks')
const routeHello = require('./routes/hello')
const routeAuth = require('./routes/auth')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(express.json());
app.use('/api/projet', routeProject)
app.use('/api/task', routeTask)
app.use('/api/hello', routeHello)
app.use('/api', routeAuth)

app.get('/sayHello',(req, res)=>{
    return res.json({message: "Hello world"})
})

app.post('/product',(req, res)=>{
    console.log(req.body);
    return res.status(201).json({message: "produit crée avec success!"})
})

module.exports = app;