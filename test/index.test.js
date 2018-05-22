"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../index').app;
describe('index', function () {
    // TODO: Mock Algolia db
    // If not we insert data when we test :(
    describe('POST /api/1/apps', function () {
        it('an invalid payload get a 422 status and exception details', function (done) {
            request(app)
                .post('/api/1/apps')
                .send({
                "name": "",
                "image": "https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/f8/5a/b9/f85ab926-2e3c-659a-bdbf-e0fcd0c118b6/release-app-icons-1x_U007emarketing-85-220-0-9.png/246x0w.jpg",
                "link": "http://itunes.apple.com/us/app/nytimes/id284862083?mt=8",
                "category": "Newsstand",
                "rank": 1
            })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(422, {
                "errors": [
                    {
                        "location": "body",
                        "param": "name",
                        "value": "",
                        "msg": "is required"
                    }
                ]
            }, done);
        });
        it('a valid payload get a 200 status and addition details', function (done) {
            request(app)
                .post('/api/1/apps')
                .send({
                "name": "NYTimes",
                "image": "https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/f8/5a/b9/f85ab926-2e3c-659a-bdbf-e0fcd0c118b6/release-app-icons-1x_U007emarketing-85-220-0-9.png/246x0w.jpg",
                "link": "http://itunes.apple.com/us/app/nytimes/id284862083?mt=8",
                "category": "Newsstand",
                "rank": 1
            })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(function (res) {
                if (res.body.objectID) {
                    res.body.objectID = 'A fake id';
                }
            })
                .expect(200, {
                "objectID": "A fake id"
            }, done);
        });
    });
    // Here we don't need a mocked Algolia db
    // because the id 123 should not exist is the db (not very safe though)
    // we can keep this two test
    describe('DELETE /api/1/apps/:id', function () {
        it('an invalid :id format (string) respond with 422 and exception details', function (done) {
            request(app)
                .delete('/api/1/apps/johndoe')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(422, {
                "errors": [
                    {
                        "location": "params",
                        "param": "id",
                        "value": "johndoe",
                        "msg": "must be a number"
                    }
                ]
            }, done);
        });
        it('a valid :id format (number) get a 200 status and deletion details', function (done) {
            request(app)
                .delete('/api/1/apps/123')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(function (res) {
                if (res.body.deletedAt) {
                    res.body.deletedAt = 'A fixed date';
                }
            })
                .expect(200, {
                "deletedAt": "A fixed date",
                "objectID": "123"
            }, done);
        });
    });
});
//# sourceMappingURL=index.test.js.map