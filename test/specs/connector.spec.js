/* global describe it */
/* eslint no-unused-expressions: 0 */
const { expect } = require('chai')
const path = require('path')
const CherryPugConnector = require('../../src/connector')

describe('CherryPugConnector class', () => {
  const connector = new CherryPugConnector({ viewEngine: { pretty: true } })
  const connectorWithoutConfig = new CherryPugConnector()

  it('Test the identifier constant', () => {
    expect(CherryPugConnector.getIdentifier()).to.be.equal('ViewEngine')
  })
  it('Test to load an html file', async () => {
    await connector.loadTemplate(path.join(__dirname, '/view-test.pug'))

    expect(connector.source).to.not.be.equal(null)
  })
  it('Test to use raw html', () => {
    connectorWithoutConfig.useHtml('div This is a test #{testName}')

    expect(connectorWithoutConfig.source).to.not.be.equal(null)
  })
  it('Test the variable binding and the renderer', () => {
    connector.bindTemplate({ testName: 'connector' })
    connectorWithoutConfig.bindTemplate({ testName: 'connectorWithoutConfig' })

    // Usage of trim to remove the crlf characters
    expect(connector.getRenderedHtml().trim()).to.be.equal('<div>This is a test connector</div>')
    expect(connectorWithoutConfig.getRenderedHtml().trim()).to.be.equal('<div>This is a test connectorWithoutConfig</div>')
  })
})
