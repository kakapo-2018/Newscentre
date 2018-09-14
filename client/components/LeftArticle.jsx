import React from 'react'



// 1 Return all Left Wing articles from the API
// 2 Map - these articles - displays a title and a short summary
// 3 The title is clickable and opens the newswebsite with that article
// 4 Stretch is to open LeftArticle.jsx with just the one article

export default class LeftArticle extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
        }
    }

    render(){
    return (
      <React.Fragment>

      <div>
          <hr id='rule'/>
          <h2><a target="_blank" href={this.props.article.url}>{this.props.article.title}</a></h2>
          <br/>
          <p>{this.props.article.content}</p>
          <img id='newsimage' src={this.props.article.urlToImage}/>
          <br/>
      </div>
 </React.Fragment>
    )
  }
}
