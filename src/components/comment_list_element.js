import React, { Component } from 'react'
import { connect } from 'react-redux'
import { commentSelector, createCommentSelector } from '../selectors'

class CommentListElement extends Component {
    render () {
        const { comment } = this.props
        return (
            <div>
                {comment.text} <b>by {comment.user}</b>
            </div>
        )
    }
}


const initMapStateToProps = () => {
    const commentSelector = createCommentSelector()

    return (state, ownProps) => ({
        comment: commentSelector(state, ownProps)
    })
}

export default connect(initMapStateToProps)(CommentListElement)