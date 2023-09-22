const whiteList = require('../white-list.json')
const blackList = require('../black-list.json')


exports.checkNumber = (number) => {
    if (blackList.includes(number)) {
        return true
    } else if (whiteList.includes(number)) {
        return false
    } else {
        return null
    }
}