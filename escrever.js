const fs = require('fs')

fs.writeFile('./caique.beringui', "Novo conteudo do arquivo!",(err) => {
    if (err) {
        console.log('erro')
    }
})