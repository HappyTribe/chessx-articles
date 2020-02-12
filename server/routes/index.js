const express = require('express')
const db = require('../db')

const router = express.Router()

router.get('/articles', async (req, res, next) => {
    try {
        let results = await db.articles()
        res.send(results)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.get('/articles/:id', async ({ params }, res, next) => {
    try {
        let results = await db.article(params.id)
        res.send(results)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

module.exports = router
