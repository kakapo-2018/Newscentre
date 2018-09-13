const path = require('path')
const express = require('express')
const request = require('superagent')

const rightSources = 'breitbart-news,fox-news,fox-sports,daily-mail,the-american-conservative,la-nacion'
const leftSources = 'liberation,the-guardian-uk,mirror,independent,the-new-york-times,buzzfeed,the-huffington-post,vice-news,mtv-news-uk,mtv-news'

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
      right: resultsArray[0].body,
      left: resultsArray[1].body
    })
    .catch(err => {
      console.log(err)
    })
  })
})



module.exports = server
