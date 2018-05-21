const serverless = require('serverless-http');
const express = require('express')
const app = express()

// Welcome route
app.get('/', function (req, res) {
    res.send(`
        Welcome to the live algolia-inferno-back project
        <p>
            POST /api/1/apps to add an app to the Algolia database
            <br>
            DELETE /api/1/apps/:id to remove an app from the Algolia database
        </p>
        <p>
            The front of this project is accessible here : 'coming soon'
        </p>
    `)
})

// Add app
app.post('/api/1/apps', function (req, res) {
        res.send('Adding something?')
    })

// Remove app
app.delete('/api/1/apps/:id', function (req, res) {
        res.send(`Removing something? Id: ${req.params.id}`)
    })

module.exports.handler = serverless(app);