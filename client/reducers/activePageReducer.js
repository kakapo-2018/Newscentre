const initialNavState = {activePage:"LandingPage"}

const activePageReducer = (state = initialNavState, action) => {
  switch (action.type) {
    case "NAVIGATE": 
     return {activePage: action.target}
    default:
      return state
  }
}
  
  export default activePageReducer
  