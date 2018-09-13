const path = require('path')
const express = require('express')
const request = require('superagent')

const rightSources = 'breitbart-news,fox-news'

const apiKey = 'apiKey=324d17864acd4c8387e3999687de6f1a'
const server = express()
const apiEndPoint = `https://newsapi.org/v2/everything?`
//const foxNews = 'sources=al-jazeera-english'


server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.get('/search/trump', (req,res) => {
  const query = 'Breitbart'
  request.get(apiEndPoint+'sources='+rightSources+'&'+'q='+query+'&'+apiKey)
    .then (ApiRes => {
      res.json(ApiRes.body)
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = server
