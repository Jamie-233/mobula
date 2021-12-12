'use strict'

const npmlog = require('npmlog')

// According to current env variables
npmlog.level = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'info' // debug model

npmlog.heading = 'mobula' // modify command prefix
npmlog.headingStyle = { fg: 'black', bg: 'white' }
npmlog.addLevel('start', 2000, { fg: 'green', blod: true }) // add custom command

module.exports = npmlog
