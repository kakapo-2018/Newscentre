import React from 'react'



// 1 Return all Left Wing articles from the API
// 2 Map - these articles - displays a title and a short summary
// 3 The title is clickable and opens the newswebsite with that article
// 4 Stretch is to open LeftArticle.jsx with just the one article

export default class LeftArticle extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          leftarticle: article.article
        }
    }

    render(){
    return (
      <React.Fragment>
      {this.state.leftarticle.map(larticle => {
        return (
           <div>
               <h2>{larticle.title}</h2>
               <p>{larticle.content}</p>
           </div>     
        )
        }
      )}
      </React.Fragment>
    )
  }
}  
