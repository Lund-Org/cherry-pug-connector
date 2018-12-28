const fs = require('fs')

/**
 * Check the existence of a file but use the promises instead of the usual callback
 * @param {string} path The path to the file
 * @return {Promise<Buffer>}
 */
async function fileExists (path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        reject(err)
      } else {
        resolve(stats)
      }
    })
  })
}

module.exports = {
  fileExists
}
