class Table{
    constructor(arr) {
        this.header = arr[0]
        arr.shift()//remove semrpe o primeiro elemento
        this.rows = arr
    }
    
    get RowCount() {
        return this.rows.length
    }

    get ColumCount() {
        return this.header.length
    }
}

module.exports =  Table