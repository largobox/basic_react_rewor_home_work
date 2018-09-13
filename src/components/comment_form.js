import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../ac'

class CommentForm extends Component {
    state = {
        user: '',
        text: ''
    }

    render () {
        return (
            <form onSubmit = {this.handleSubmit}>
                <span>user: </span>
                <input value = {this.state.user} onChange = {this.handleChange('user')} />
                <span>text: </span>
                <input value = {this.state.text} onChange = {this.handleChange('text')} />
                <input type = 'submit' value = 'Send' disabled = {!this.isValidForm()} />
            </form>
        )
    }

    handleSubmit = (ev) => {
        ev.preventDefault()

        this.props.addComment(this.state)
        this.setState({
            user: '',
            text: ''
        })
    }

    handleChange = (type) => (ev) => {
        const { value } = ev.target

        if (value.length > limits[type].max) return

        this.setState({
            [type]: value
        })
    }

    isValidForm = () => ['user', 'text'].every(this.isValidField)

    isValidField = (type) => this.state[type].length >= limits[type].min

}

const limits = {
    user: {
        min: 10,
        max: 50
    },
    text: {
        min: 10,
        max: 50
    }
}

export default connect(
    null,
    (dispatch, ownProps) => ({
        addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
    })
)(CommentForm)