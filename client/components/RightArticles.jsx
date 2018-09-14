import React from 'react'
import RightArticle from './RightArticle'
//import API from API TBD
import data from '../../public/data.json'


// 1 Return all Left Wing articles from the API
// 2 Map - these articles - displays a title and a short summary
// 3 The title is clickable and opens the newswebsite with that article
// 4 Stretch is to open LeftArticle.jsx with just the one article

export default class RightArticles extends React.Component {
    constructor (props) {
        super(props)
        // this.state = {
        // //   rightarticles: articles.articles
        // }
    }

    render(){
    return (
      <React.Fragment>
        <h1 id="righttitle" class="title">RIGHT ARTICLES</h1>

        {console.log(data.right)}
      {data.right.articles.map(rarticle => {
        return <RightArticle article={rarticle} />
        }
      )}
      </React.Fragment>
    )
  }
}
