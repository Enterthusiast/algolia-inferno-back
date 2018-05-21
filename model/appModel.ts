const algoliasearch = require('algoliasearch')
const algoliasearchHelper = require('algoliasearch-helper')

const environment = require('../environment/config')

import { AppInterface } from './appInterface';


// initialize connection to algolia
const algoliaClient = algoliasearch(environment.applicationID, environment.apiKey);
const algoliaIndex = algoliaClient.initIndex(environment.indexName);

module.exports = {

    add: async (app: AppInterface) => {
        try {
            const response: {objectID: number, taskID: number} = await algoliaIndex.addObject(app)

            // close connection
            algoliaClient.destroy()
    
            return {
                objectID: response.objectID
            }
        } catch (error) {
            throw error
        }
    },

    remove: async (id: number) => {
        try {
            const response: {deletedAt: Date, objectID: number, taskID: number} = await algoliaIndex.deleteObject(id)

            // close connection
            algoliaClient.destroy()
    
            return {
                deletedAt: response.deletedAt,
                objectID: response.objectID
            }
        } catch (error) {
            throw error
        }
    }
    
}