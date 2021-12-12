#! /usr/bin/env node

const importLocal = require('import-local')

if (importLocal(__filename)) {
  require('npmlog').info('mobula', ' Using Local ...')
} else {
  require('../lib')(process.argv.slice(2))
}
