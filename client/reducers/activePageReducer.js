// const initialNavState = {activePage:"LandingPage"}

// const activePageReducer = (state = initialNavState, action) => {
  
//   switch (action.type) {
//     case "NAVIGATE": 
//     console.log('action.target');
    
//      return {activePage: action.target}
    
//   }
//   return {activePage: action.target}

// }
//   export default activePageReducer
  


export default function(state = 'LandingPage', action){
  switch(action.type){
      case "NAVIGATE":
      return action.target
  }
  return state
}