const Pug = require('pug')
const fs = require('./helpers/fs')

/**
 * The connector to use Pug with cherry
 * You can register it as a plugin using this following code
 * @example
 * const Cherry = require('@lundOrg/cherry')
 * const CherryPugConnector = require('@lundOrg/cherry-pug-connector')
 *
 * const cherry = new Cherry()
 * cherry.configure(your_routes, [], your_options)
 * cherry.registerPlugin(CherryPugConnector)
 * cherry.start(options)
 */
class CherryPugConnector {
  /**
   * The connector to use Pug with cherry
   */
  constructor (configuration = {}) {
    if (typeof configuration.viewEngine !== 'undefined') {
      this.configuration = configuration.viewEngine
    } else {
      this.configuration = {}
    }
    this.source = null
    this.renderedHtml = null
  }

  /**
   * Get the type of plugin
   * @return {string}
   */
  static getIdentifier () {
    return 'ViewEngine'
  }

  /**
   * Load a file as a source
   * @param {string} filePath The path to the view to render
   */
  async loadTemplate (filePath) {
    await fs.fileExists(filePath)
    this.source = filePath
  }

  /**
   * Use a string as the html to render
   * @param {string} source The raw html to use
   */
  useHtml (source) {
    this.configuration.isRaw = true
    this.source = Pug.compile(source)
  }

  /**
   * Bind the variables to the template
   * @param {object} variables The variables to insert in the template
   */
  bindTemplate (variables = {}) {
    if (typeof this.configuration.isRaw !== 'undefined' && this.configuration.isRaw) {
      this.renderedHtml = this.source(variables)
    } else {
      this.renderedHtml = Pug.renderFile(this.source, variables)
    }
  }

  /**
   * Retrieve the html after the variable replacement
   * @return {string}
   */
  getRenderedHtml () {
    return this.renderedHtml
  }
}

module.exports = CherryPugConnector
