const homeView = require('./view/homeView')
const appModel = require('./model/appModel')

const serverless = require('serverless-http')
const bodyParser = require('body-parser');
const express = require('express')
const app = express()

// For parsing application/json
app.use(bodyParser.json());

// Welcome route
app.get('/', function (req, res) {
    res.send(homeView());
})

// Add app
app.post('/api/1/apps', async function (req, res) {
        try {
            const response = await appModel.add(req.body)
            res.json(response)
        } catch(error) {
            res.status(400).json(error);
        }
    })

// Remove app
app.delete('/api/1/apps/:id', async function (req, res) {
        try {
            const response = await appModel.remove(req.params.id)
            res.json(response)
        } catch(error) {
            res.status(400).json(error);
        }
    })

module.exports.handler = serverless(app);