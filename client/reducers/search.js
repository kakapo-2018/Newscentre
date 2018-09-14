const search = (state = [], action) => {
    switch (action.type) {
      case 'SEARCH':
        return [
          ...state,
          {
            articles: action.word
          }
        ]
  
      default:
        return state
    }
  }
  
  export default search