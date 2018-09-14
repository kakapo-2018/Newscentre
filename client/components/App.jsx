import React from 'react'
import Header from './Header'
import Landingpage from './Landingpage'
import Subscription from './Subscription'
import Footer from './Footer'
import { connect } from 'react-redux'


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('????')
    console.log(this.props.activePage)
    return (
      <div className='app'>
        <Header />
        {this.props.activePage == "Subscription" ? <Subscription /> : <Landingpage />}
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activePage: state.activePageReducer.activePage
  }
}

export default connect(mapStateToProps)(App)