export const searchWord = (word) => {
  return {
    type: 'SEARCH',
    word: word
  }
}

export const getArticles = (articles) => {
  return {
    type: 'GET-ARTICLES',
    articles: articles
  }
}

export const navigate = target => {
  console.log('navigate');
  console.log(target);
  
  
  return {
    type: "NAVIGATE",
    target
  }
}
