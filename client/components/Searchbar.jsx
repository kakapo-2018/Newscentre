import React from 'react'
import { connect } from 'react-redux'
// import {searchWord} from '../actions'    TO BE DONE


function submitSearchWord (e, dispatch) {
    if (e.keycode === 13) {
        dispatch(searchWord(e.currentTarget.value))
        e.currentTarget.value = ''
    }
}

const Searchbar = (props) => (
<div id="searchBar">
    <input class="input is-large" type="text"
        placeholder='Enter your search term'
        onKeyUp={e => {
            submitSearchWord(e, props.dispatch)
        }}
    />

</div>
)
    
export default connect()(Searchbar)

