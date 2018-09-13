import React, { Component } from 'react'
import Comment from './comment_list_element'
import CommentForm from './comment_form'

import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    render () {
        const { isOpen, toggleOpen } = this.props
        const text = isOpen ? 'hide comments' : 'show comments'

        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody () {
        const { article: { comments = [], id }, isOpen } = this.props

        if (!isOpen) return null

        const body = comments.length ? (this.comments) : (<h3>No comments yet</h3>)

        return (
            <div>
                {body}
                <CommentForm articleId = {id} />
            </div>
        )
    }  

    get comments () {
        return (
            <ul>
                {this.props.article.comments.map((id) => (
                            <li key = {id}>
                                <Comment id = {id} />
                            </li>
                        )
                    )
                }
            </ul>
        )
    }

}

export default toggleOpen(CommentList)