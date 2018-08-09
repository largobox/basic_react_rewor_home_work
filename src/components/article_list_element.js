import React, { PureComponent } from 'react'
import CommentList from './comment_list'

export default class ArticleListElement extends PureComponent {
    render () {
        const { article, isOpen } = this.props

        return  <li>
                    <h2>{article.title}</h2>
                    <button onClick = {this.handleClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                    {this.body}                  
                    <CommentList comments = {article.comments} />
                </li>
    }

    get body () {
        const { isOpen, article } = this.props

        if (!isOpen) return null

        return <p>{article.text}</p>
    }

    handleClick = () =>
        this.props.toggleOpen(this.props.article.id)
}