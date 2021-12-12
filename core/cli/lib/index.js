const semver = require('semver')
const colors = require('colors')
const log = require('@mobula/log')
const constant = require('./const')
const pkg = require('../package.json')

const context = {
  mobulaVersion: pkg.version
}

function core() {
  try {
    checkPkgVersion()
    checkNodeVersion()
  } catch (ex) {
    log.error(ex.message)
  }
}

function checkNodeVersion() {
  // get the current node version number
  const currentVersion = process.version

  // compared node version
  const lowestVersion = constant.LOWEST_NODE_VERSION

  // currentVersion !> lowestVersion => true
  if (!semver.gte(currentVersion, lowestVersion)) {
    throw new Error(colors.red(`mobula need to install Node.js ${lowestVersion} or higher`))
  }
}

function checkPkgVersion() {
  log.notice(context.mobulaVersion)
}

module.exports = core
