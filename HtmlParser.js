const ejs = require('ejs')

class HtmlParser{

     static async Parse(table, rows) {
      
     return await ejs.renderFile("./html.ejs", { header: table.header, rows: table.rows })
        
    }
    
    
}

module.exports = HtmlParser