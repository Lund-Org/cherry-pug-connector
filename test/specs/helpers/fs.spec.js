/* global describe it */
/* eslint no-unused-expressions: 0 */
const { expect } = require('chai')
const path = require('path')
const fs = require('../../../src/helpers/fs')

describe('Fs Helper', () => {
  it('Test if a file can be read', async () => {
    try {
      await fs.fileExists(path.join(__dirname, '/fs.spec.js'))
      expect(true).to.be.true
    } catch (e) {
      expect(false).to.be.true
    }
  })
  it('Test if a file doesn\'t exist', async () => {
    try {
      await fs.fileExists(path.join(__dirname, '/random-file.txt'))
      expect(false).to.be.true
    } catch (e) {
      expect(true).to.be.true
    }
  })
})
