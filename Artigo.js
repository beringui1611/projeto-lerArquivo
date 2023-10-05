const fs = require('fs')
const util = require('util')



class Artigo{

    constructor() {
        this.reader = util.promisify(fs.readFile)
    }

  async  Read(file) {
      try {
          return await this.reader(file, 'utf-8')
          
      } catch(err) {
          return undefined
   }
}
}

module.exports = Artigo