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
const appModel = require('../../model/appModel');
describe('appModel', function () {
    describe('appModel.add', function () {
        it('no payload throw an error', function () {
            return __awaiter(this, void 0, void 0, function* () {
                let result;
                try {
                    yield appModel.add();
                    result = true;
                }
                catch (error) {
                    result = false;
                }
                expect(result).to.be.false;
            });
        });
        it('with a payload succeed', function () {
            return __awaiter(this, void 0, void 0, function* () {
                let result;
                try {
                    yield appModel.add({
                        "name": "NYTimes",
                        "image": "https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/f8/5a/b9/f85ab926-2e3c-659a-bdbf-e0fcd0c118b6/release-app-icons-1x_U007emarketing-85-220-0-9.png/246x0w.jpg",
                        "link": "http://itunes.apple.com/us/app/nytimes/id284862083?mt=8",
                        "category": "Newsstand",
                        "rank": 1
                    });
                    result = true;
                }
                catch (error) {
                    result = false;
                }
                expect(result).to.be.true;
            });
        });
    });
    describe('appModel.remove', function () {
        it('no payload throw an error', function () {
            return __awaiter(this, void 0, void 0, function* () {
                let result;
                try {
                    yield appModel.remove();
                    result = true;
                }
                catch (error) {
                    result = false;
                }
                expect(result).to.be.false;
            });
        });
        it('with a payload succeed', function () {
            return __awaiter(this, void 0, void 0, function* () {
                let result;
                try {
                    yield appModel.remove(123);
                    result = true;
                }
                catch (error) {
                    result = false;
                }
                expect(result).to.be.true;
            });
        });
    });
});
//# sourceMappingURL=appModel.test.js.map