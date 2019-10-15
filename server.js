const { prisma } = require('./generated/prisma-client')
const express = require('express')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.json())

const SERVER_PORT = process.env.PORT || 3000







app.listen(SERVER_PORT, (req,res) => {
       console.log('server started sucessfully at port ' + SERVER_PORT)
})