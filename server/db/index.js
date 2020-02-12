const mysql = require('mysql')

const connection = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'chesser',
    password: 'blahblah',
    database: 'chessx',
})

let chessxdb = {}

chessxdb.articles = () =>
    new Promise((resolve, reject) => {
        connection.query('SELECT * FROM items', (err, results) => {
            if (err) return reject(err)
            return resolve(results)
        })
    })

chessxdb.article = id =>
    new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM items WHERE id = ${id}`, (err, results) => {
            if (err) return reject(err)
            return resolve(results[0])
        })
    })

module.exports = chessxdb
