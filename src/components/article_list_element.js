import React, { PureComponent } from 'react'
import CommentList from './comment_list'
import { connect } from 'react-redux'
import { deleteArticle } from '../ac'

class ArticleListElement extends PureComponent {
    render () {
        const { article, isOpen } = this.props

        return  <li>
                    <h2>{article.title}</h2>
                    <button onClick = {this.handleClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                    <button onClick= {this.handleDelete}>delete</button>
                    {this.body}                  
                    <CommentList article = {article} />
                </li>
    }

    get body () {
        const { isOpen, article } = this.props

        if (!isOpen) return null

        return <p>{article.text}</p>
    }

    handleClick = () => {
        this.props.toggleOpen(this.props.article.id)
    }

    handleDelete = () => {
        this.props.deleteArticle(this.props.article.id) 
    }
}

export default connect(null, { deleteArticle })(ArticleListElement)