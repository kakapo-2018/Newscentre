import React from 'react'
import LeftArticle from './LeftArticle'
//import API from API TBD
import data from '../../public/data.json'

// 1 Return all Left Wing articles from the API
// 2 Map - these articles - displays a title and a short summary
// 3 The title is clickable and opens the newswebsite with that article
// 4 Stretch is to open LeftArticle.jsx with just the one article

export default class LeftArticles extends React.Component {
    constructor (props) {
        super(props)
        // this.state = {
        // //   articles : articles.left
        // }
    }

    render(){
    return (
      <React.Fragment>
        <h1 id="lefttitle" class="title">LEFT ARTICLES</h1>


      {data.left.articles.map(larticle => {
        return <LeftArticle article={larticle} />
        }
      )}
      </React.Fragment>
    )
  }
}
