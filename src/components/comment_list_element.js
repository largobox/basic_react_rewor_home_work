import React, { Component } from 'react'

export default class CommentListElement extends Component {
    render () {
        const { comment } = this.props
        return (
            <div>
                {comment.text} <b>by {comment.user}</b>
            </div>
        )
    }
}