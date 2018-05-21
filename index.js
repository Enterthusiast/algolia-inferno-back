var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const homeView = require('./view/homeView');
const appModel = require('./model/appModel');
const appValidator = require('./model/appValidator');
// For parsing application/json
app.use(bodyParser.json());
// Welcome route
app.get('/', function (req, res) {
    res.send(homeView());
});
// Add app
app.post('/api/1/apps', appValidator.add, function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield appModel.add(req.body);
            res.json(response);
        }
        catch (error) {
            res.status(400).json(error);
        }
    });
});
// Remove app
app.delete('/api/1/apps/:id', appValidator.remove, function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield appModel.remove(req.params.id);
            res.json(response);
        }
        catch (error) {
            res.status(400).json(error);
        }
    });
});
module.exports.handler = serverless(app);
//# sourceMappingURL=index.js.map