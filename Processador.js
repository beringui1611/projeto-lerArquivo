class Processador{
    static Process(data) {

        const a = data.split("\n")
        const rows = []

        a.forEach(row => {
            const arr = row.split(',')
            rows.push(arr)
        })
        
       return rows
    }
}

module.exports = Processador