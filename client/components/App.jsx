import React from 'react'

import Header from './Header'
import Landingpage from './Landingpage'
import ActualForm from './ActualForm'
import Form from './Form'
import Footer from './Footer'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('????')
    console.log(this.props.activePageReducer)
    return (
      <div className='app'>
        <Header activePage={this.props.activePageReducer} />
        {this.props.activePageReducer === "Subscription" ? <Form /> : <Landingpage />}
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activePageReducer: state.activePageReducer
  }
}

export default connect(mapStateToProps)(App)

