import React from 'react'



// 1 Return all Left Wing articles from the API
// 2 Map - these articles - displays a title and a short summary
// 3 The title is clickable and opens the newswebsite with that article
// 4 Stretch is to open LeftArticle.jsx with just the one article

export default class RightArticle extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          rightarticle: article.article
        }
    }

    render(){
    return (
      <React.Fragment>
      {this.state.rightarticle.map(rarticle => {
        return (
           <div>
               <h2>{rarticle.title}</h2>
               <p>{rarticle.content}</p>
           </div>     
        )
        }
      )}
      </React.Fragment>
    )
  }
}  