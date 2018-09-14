import React from 'react'
import ActualForm from './ActualForm';
import Confirmation from './Confirmation'

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            view: true
        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(){
        console.log('email sent');
        this.setState({
            view: false
        })
        
    }

render() {
 return (
     <div>
        {this.state.view && <ActualForm handleClick={this.handleClick}/>}
        {!this.state.view && <Confirmation/>}
    </div>    
  )
}
}

export default Form
