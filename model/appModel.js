"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const algoliasearch = require('algoliasearch');
const algoliasearchHelper = require('algoliasearch-helper');
const environment = require('../environment/config');
// initialize connection to algolia
const algoliaClient = algoliasearch(environment.applicationID, environment.apiKey);
const algoliaIndex = algoliaClient.initIndex(environment.indexName);
module.exports = {
    add: (app) => __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield algoliaIndex.addObject(app);
            // close connection
            algoliaClient.destroy();
            return {
                objectID: response.objectID
            };
        }
        catch (error) {
            throw error;
        }
    }),
    remove: (id) => __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield algoliaIndex.deleteObject(id);
            // close connection
            algoliaClient.destroy();
            return {
                deletedAt: response.deletedAt,
                objectID: response.objectID
            };
        }
        catch (error) {
            throw error;
        }
    })
};
//# sourceMappingURL=appModel.js.map