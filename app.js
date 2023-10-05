const Artigo = require('./Artigo')
const Processador = require('./Processador')
const Table = require('./Table')
const HtmlParser = require('./HtmlParser')
const Writer = require('./Writer')
const PDFwriter = require('./PdfWriter')




const leitor = new Artigo()
const escritor = new Writer()



async function main() {
    const dados = await leitor.Read('./products.csv')
    const dadosProcessadoas = Processador.Process(dados)

    const usuarios = new Table(dadosProcessadoas)

    const html = await HtmlParser.Parse(usuarios)
    
 

    escritor.Write(Date.now() + ".html", html)
    PDFwriter.WritePDF(Date.now() + ".PDF", html)



}

main()