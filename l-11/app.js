const mysql = require('mysql2/promise')
const myConfig = require('./config')

async function main() {
    const conn = await mysql.createConnection(myConfig)
    const [rows, fields] = await conn.execute("SELECT * FROM users WHERE id = 1")
    const newMail = rows[0]['email']
    // console.log(newMail)

    const secondMail = newMail + Math.ceil(Math.random())

    await conn.execute('UPDATE users SET email="' + secondMail + '" WHERE id = 3')

    conn.end()
    return rows
}


async function returnMain() {
    const rows = await main()
    console.log(rows)
}

returnMain()