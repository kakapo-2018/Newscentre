
import React from 'react'

class ActualForm extends React.Component{
    constructor(props){
    super(props)
        this.state ={}
    }


    render(){
        return (
        <div class="container">
        <div id="formPage" class="field">
        <form id="contact-form">
            <input type="hidden"  name="contact_number"/>
            <label class="label">Name</label>
            {/* <input id="name" type="text" name="from_name"/> */}
            <div class="field">
        <div class="control">
        <input class="input is-primary" type="text" name="from_name" placeholder="Your name"/>
        </div></div>
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
            <input class="input is-danger" type="email" placeholder="Test@gmail.com"name="user_email"/>
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
        </span>
            </div>
            <label class="label">Message</label>
            {/* <textarea id="text" name="message_html"></textarea> */}
            <div class="field">
        <div class="control">
        <textarea class="textarea is-primary" type="text" name="message_html" placeholder="Enter message here"></textarea>
        </div>
        </div>
            <label class="label">Comments on your newsfeeds</label>
            <div class="field">
        <div class="control">
        <input class="input is-primary" type="text" name="from_news" placeholder="Enter comments"/>
        </div></div>
            {/* <input id="newsfeed" type="text" name="from_news"/> */}
            <input onClick={this.props.handleClick} class="button is-link" type="submit" value="Send"/>
        </form>
        </div>
        </div>
        )
    }
}


export default ActualForm
