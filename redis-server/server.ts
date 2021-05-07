const express = require('express')
require('dotenv').config({ path: '../env/redis.env' })

const app = express()

const PORT = process.env.PORT 

app.get('/', (req, res) => {
    res.send('redis database server')
})

app.listen(PORT, () => {
    console.log(`Redis database server is running on port ${PORT}`)
})