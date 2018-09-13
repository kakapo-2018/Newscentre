const path = require('path')
const express = require('express')
const request = require('superagent')

const rightSources = 'breitbart-news,fox-news,fox-sports'
const leftSources = 'liberation'

const apiKey = 'apiKey=324d17864acd4c8387e3999687de6f1a'
const server = express()
const apiEndPoint = `https://newsapi.org/v2/everything?`



server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))




server.get('/search',(req,res) => {
  const query = 'trump'
  Promise.all([
    request.get(apiEndPoint+'sources='+rightSources+'&'+'q='+query+'&'+apiKey),
    request.get(apiEndPoint+'sources='+leftSources+'&'+'q='+query+'&'+apiKey)
  ]).then(resultsArray => {
    res.json({
      left: resultsArray[0].body,
      right: resultsArray[1].body
    })
    .catch(err => {
      console.log(err)
    })
  })
})



module.exports = server
