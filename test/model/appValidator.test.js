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
const expect = require('chai').expect;
const httpMocks = require('node-mocks-http');
const { validationResult } = require('express-validator/check');
const appValidator = require('../../model/appValidator');
// usefull to test express middleware, particularly the express-validator ones
// found at https://stackoverflow.com/questions/28769200/unit-testing-validation-with-express-validator
const testExpressValidatorMiddleware = (req, res, middlewares) => __awaiter(this, void 0, void 0, function* () {
    yield Promise.all(middlewares.map((middleware) => __awaiter(this, void 0, void 0, function* () {
        yield middleware(req, res, () => undefined);
    })));
});
describe('appValidator', function () {
    describe('appValidator.add', function () {
        it('no payload give a validation error', function () {
            return __awaiter(this, void 0, void 0, function* () {
                let req = httpMocks.createRequest({
                    method: 'POST',
                    url: '/fake/url',
                    body: {}
                });
                let res = httpMocks.createResponse();
                yield testExpressValidatorMiddleware(req, res, appValidator.add);
                const errors = validationResult(req);
                expect(errors.isEmpty()).to.be.false;
            });
        });
        it('an invalid payload give a validation error', function () {
            return __awaiter(this, void 0, void 0, function* () {
                let req = httpMocks.createRequest({
                    method: 'POST',
                    url: '/fake/url',
                    body: {
                        "name": "",
                        "image": "https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/f8/5a/b9/f85ab926-2e3c-659a-bdbf-e0fcd0c118b6/release-app-icons-1x_U007emarketing-85-220-0-9.png/246x0w.jpg",
                        "link": "http://itunes.apple.com/us/app/nytimes/id284862083?mt=8",
                        "category": "Newsstand",
                        "rank": 1
                    }
                });
                let res = httpMocks.createResponse();
                yield testExpressValidatorMiddleware(req, res, appValidator.add);
                const errors = validationResult(req);
                expect(errors.isEmpty()).to.be.false;
            });
        });
        it('a valid payload give no validation error', function () {
            return __awaiter(this, void 0, void 0, function* () {
                let req = httpMocks.createRequest({
                    method: 'POST',
                    url: '/fake/url',
                    body: {
                        "name": "NYTimes",
                        "image": "https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/f8/5a/b9/f85ab926-2e3c-659a-bdbf-e0fcd0c118b6/release-app-icons-1x_U007emarketing-85-220-0-9.png/246x0w.jpg",
                        "link": "http://itunes.apple.com/us/app/nytimes/id284862083?mt=8",
                        "category": "Newsstand",
                        "rank": 1
                    }
                });
                let res = httpMocks.createResponse();
                yield testExpressValidatorMiddleware(req, res, appValidator.add);
                const errors = validationResult(req);
                expect(errors.isEmpty()).to.be.true;
            });
        });
    });
    describe('appValidator.remove', function () {
        it('no payload give a validation error', function () {
            return __awaiter(this, void 0, void 0, function* () {
                let req = httpMocks.createRequest({
                    method: 'DELETE',
                    url: '/fake/url',
                    param: {}
                });
                let res = httpMocks.createResponse();
                yield testExpressValidatorMiddleware(req, res, appValidator.remove);
                const errors = validationResult(req);
                expect(errors.isEmpty()).to.be.false;
            });
        });
        it('an invalid payload give a validation error', function () {
            return __awaiter(this, void 0, void 0, function* () {
                let req = httpMocks.createRequest({
                    method: 'DELETE',
                    url: '/fake/url',
                    params: {
                        "id": "johndoe"
                    }
                });
                let res = httpMocks.createResponse();
                yield testExpressValidatorMiddleware(req, res, appValidator.remove);
                const errors = validationResult(req);
                expect(errors.isEmpty()).to.be.false;
            });
        });
        it('a valid payload no validation error', function () {
            return __awaiter(this, void 0, void 0, function* () {
                let req = httpMocks.createRequest({
                    method: 'DELETE',
                    url: '/fake/url',
                    params: {
                        "id": 123
                    }
                });
                let res = httpMocks.createResponse();
                yield testExpressValidatorMiddleware(req, res, appValidator.remove);
                const errors = validationResult(req);
                expect(errors.isEmpty()).to.be.true;
            });
        });
    });
});
//# sourceMappingURL=appValidator.test.js.map