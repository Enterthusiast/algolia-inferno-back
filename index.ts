const serverless = require('serverless-http')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const homeView = require('./view/homeView')
const appFormView = require('./view/appFormView')
const appModel = require('./model/appModel')
const appValidator = require('./model/appValidator')


// For parsing application/json
app.use(express.json())

// Welcome route
app.get('/', function (req, res) {
    res.send(homeView());
    // @todo form
    // res.send(appFormView());
})

// Add app
app.post('/api/1/apps', appValidator.add, async function (req, res) {
        try {
            const response = await appModel.add(req.body)
            res.json(response)
        } catch(error) {
            res.status(400).json(error)
        }
    })

// Remove app
app.delete('/api/1/apps/:id', appValidator.remove, async function (req, res) {
        try {
            const response = await appModel.remove(req.params.id)
            res.json(response)
        } catch(error) {
            res.status(400).json(error)
        }
    })

module.exports.app = app
module.exports.handler = serverless(app)