const mysql = require('mysql')



const myConfig = {
    host: 'localhost',
    user: 'root',
    database: 'my-site',
    password: 'mysql'
}

const conn = mysql.createConnection({
    host: myConfig.host,
    user: myConfig.user,
    database: myConfig.database,
    password: myConfig.password
})

conn.connect(err => {
    if (err) {
        console.log(err)
        return err
    } else {
        console.log('DataBase ------ OK')
    }
})

let queryString = "SELECT * FROM users"
conn.query(queryString, (err, result, field) => {
    console.log(err)
    console.log(result)
    // console.log(result[1].username)
    // console.log(field)
})

conn.end((err) => {
    if (err) {
        console.log(err)
        return err
    } else {
        console.log('DataBase ------ Closed')
    }
})