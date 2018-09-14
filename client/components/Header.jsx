import React from 'react'
import {Link} from 'react-router-dom'
import {HashRouter as Router} from'react-router-dom'
import { connect } from 'react-redux';
import {navigate} from '../actions/index'


class Header extends React.Component{
    constructor(props){
        super(props)

        this.state={
            activePage: ''
        }
    this.handleSubscription = this.handleSubscription.bind(this)
    this.handleHome = this.handleHome.bind(this)

    }



handleSubscription(e) {
    console.log('hit func');

    this.props.returnToListing()
}

handleHome(e) {
    this.props.returnToHome()
}

render(){

    return (
    <Router>
    <div className = 'title'>
        <center><img id='logo' src='/title.svg'/></center>
        <Link to="/" className={'navoptions'} onClick={(e)=> this.handleHome(e)}><span id="headerlinks">Home</span></Link>
        <Link to="/" className={'navoptions'} onClick={(e)=> this.handleSubscription(e)}><span id="headerlinks">Subscribe</span></Link>
    </div>
    </Router>
    )


    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        returnToListing: () => {
            dispatch(navigate('Subscription'))
        },
        returnToHome: () => {
            dispatch(navigate('LandingPage'))
        }
    }
}

function mapStateToProps(state) {
    return {
      activePageReducer: state.activePageReducer
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Header)
