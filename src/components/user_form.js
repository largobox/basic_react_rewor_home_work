import React, { Component } from 'react'

export default class UserForm extends Component {
    state = {
        userName: ''
    }

    render () {
        return (
            <div>
                Username: <input value = {this.state.userName} onChange = {this.handleChange} />
            </div>
        )
    }

    handleChange =  (ev) => {
        ev.preventDefault()

        if (ev.target.value.length > 5) {
            this.setState({userName: ''})
            return
        } 

        this.setState({
            userName: ev.target.value
        })
    }
}