import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
    <div className = 'footer'>
        <h3><Link to="https://github.com/kakapo-2018/Newscentre" className={'navoptions'}>Home</Link></h3> 
        <h4>Marie, Matt, Nat, Leslie and Richard</h4>
        <h4><a href="https://newsapi.org">News API</a></h4>
    </div>
    )
}
export default Footer