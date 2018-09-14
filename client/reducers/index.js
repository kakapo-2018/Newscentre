import {combineReducers} from 'redux'

import search from './search'
import activePageReducer from './activePageReducer'


export default combineReducers({
  search,
  activePageReducer
})
