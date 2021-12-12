#! /usr/bin/env node

const importLocal = require('import-local')
// const utils = require('@mobula/utils')

if (importLocal(__filename)) {
  require('npmlog').info('mobula', ' Using Local ...')
} else {
  require('../lib')(process.argv.slice(2))
}
