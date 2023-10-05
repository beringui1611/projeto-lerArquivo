const fs = require('fs')

let conteudo;

fs.readFile('./caique.beringui',{encoding: 'utf-8'}, (error, dados) => {
    
    if (error) {
        console.log("ocorreu uma falha durante a leitura do arquivo")
    } else {
     conteudo = dados
    }
})


function modificarUsuario(nome, curso, categoria) {
    fs.readFile('./usuario.json', { encoding: 'utf-8' }, (err, dados) => {
        if (err) {
        console.log(err)
        } else {
            const conteudo = JSON.parse(dados)

            conteudo.name = nome
            conteudo.curso = curso
            conteudo.categoria = categoria

            fs.writeFile('./usuario.json', JSON.stringify(conteudo), (err) => {
                if (err) {
                    console.log(err)
                }
            })
        }
    })
}

modificarUsuario('monkey','beringui',20)