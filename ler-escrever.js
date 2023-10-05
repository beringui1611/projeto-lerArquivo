const fs = require('fs')

fs.readFile('./usuario.json', { encoding: 'utf-8' }, (err, dados) => {
    if (err) {
        console.log(err)
    } else {
        const conteudo = JSON.parse(dados)//texto para objeto js(json)
        conteudo.name = "caique alves beringui"

        fs.writeFile('./usuario.json', JSON.stringify(conteudo), (err) => {
            if (err) {
                console.log(err)
            }
        })// converte de objeto js para texto
        console.log(conteudo)
    }
})