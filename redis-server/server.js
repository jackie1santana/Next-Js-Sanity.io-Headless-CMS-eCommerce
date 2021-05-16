// const express = require('express')
// require('dotenv').config({ path: '../env/redis.env' })

// const app = express()

// const PORT = process.env.PORT 

// app.get('/', (req, res) => {
//     res.send('redis database server')
// })

const Redis = require("ioredis");
let client = new Redis("rediss://:5838d1b2bb7741af8674dbb45e6e53ba@us1-grand-ringtail-33250.upstash.io:33250");
client.set('foo', 'bar');




// app.listen(PORT, () => {
//     console.log(`Redis database server is running on port ${PORT}`)
// })