// typescript fix
// prevent error: "cannot redeclare block scoped variable"
export {};

const expect = require('chai').expect
const appModel = require('../../model/appModel')


describe('appModel', function() {

    describe('appModel.add', function() {
        it('no payload throw an error', async function() {
            let result
            try {
                await appModel.add()
                result = true
            } catch (error) {
                result = false
            }
            expect(result).to.be.false
        })
    
        it('with a payload succeed', async function() {
            let result
            try {
                await appModel.add({     
                    "name": "NYTimes",
                    "image": "https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/f8/5a/b9/f85ab926-2e3c-659a-bdbf-e0fcd0c118b6/release-app-icons-1x_U007emarketing-85-220-0-9.png/246x0w.jpg",
                    "link": "http://itunes.apple.com/us/app/nytimes/id284862083?mt=8",
                    "category": "Newsstand",
                    "rank": 1
                })
                result = true
            } catch (error) {
                result = false
            }
            expect(result).to.be.true
        })
    })

    describe('appModel.remove', function() {
        it('no payload throw an error', async function() {
            let result
            try {
                await appModel.remove()
                result = true
            } catch (error) {
                result = false
            }
            expect(result).to.be.false
        })

        it('with a payload succeed', async function() {
            let result
            try {
                await appModel.remove(123)
                result = true
            } catch (error) {
                result = false
            }
            expect(result).to.be.true
        })
    })
})