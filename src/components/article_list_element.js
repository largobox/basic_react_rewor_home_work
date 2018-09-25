import React, { PureComponent } from 'react'
import CommentList from './comment_list'
import Loader from './common/loader'
import { connect } from 'react-redux'
import { deleteArticle, loadArticle } from '../ac'

class ArticleListElement extends PureComponent {
    componentDidUpdate (oldProps) {
        const { isOpen, loadArticle, article } = this.props

        if (!oldProps.isOpen && isOpen && !article.text) loadArticle(article.id)
    }

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
        if (article.loading) return <Loader />

        return <p>{article.text}</p>
    }

    handleClick = () => {
        this.props.toggleOpen(this.props.article.id)
    }

    handleDelete = () => {
        this.props.deleteArticle(this.props.article.id) 
    }
}

export default connect(null, { deleteArticle, loadArticle })(ArticleListElement)