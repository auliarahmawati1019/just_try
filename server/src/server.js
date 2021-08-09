const express = require('express')
require('dotenv/config')

const app = express()
app.use(express.json())
const port = process.env.SERVER_PORT


app.listen(port, () => {
    console.log(`App running on port ${port}`)
    console.log(`Hello`)
})