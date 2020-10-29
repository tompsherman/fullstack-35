require('dotenv').config()

const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 6969

const server = express()

server.use(express.json())

server.use(express.static(path.join(__dirname, 'app/build')))

//endpoints
server.get('/api', (req,res)=>{ 
    res.json({message: 'API is up'})
 })


//fallback endpoint that sends index.html
server.get('*', (req,res)=>{ 
    res.sendFile(path.join(__dirname, 'app/build', 'index.html'))
 })


server.listen(PORT, ()=> {
    console.log(`listening on ${PORT}`)
})