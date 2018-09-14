import React from 'react'
import {Link} from 'react-router-dom'
import {HashRouter as Router} from'react-router-dom'


const Header = () => {
    return (
    <Router>
    <div className = 'title'>
        <h2>News Centre</h2>
        <h3><Link to="/" className={'navoptions'}>Home</Link></h3> 
        <h3><Link to="/subscribe" className={'navoptions'} onClick={(e)=> props.activePage}>Subscribe</Link></h3>
    </div>
    </Router>
    )
}
export default Header