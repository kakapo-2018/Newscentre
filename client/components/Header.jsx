import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
    <div className = 'title'>
        <h2>News Centre</h2>
        <h3><Link to="/" className={'navoptions'}>Home</Link></h3>
        <h3><Link to="/subscribe" className={'navoptions'}>Subscribe</Link></h3>
    </div>
    )
}
export default Header