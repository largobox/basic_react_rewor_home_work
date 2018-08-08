import React, { PureComponent } from 'react'

export default class ArticleListElement extends PureComponent {
    render () {
        console.log('Article render')
        const { article, isOpen } = this.props

        return  <li>
                    <h2>{article.title}</h2>
                    <button onClick = {this.handleClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                    {this.body}
                </li>
    }

    get body () {
        const { isOpen, article } = this.props

        if (!isOpen) return null

        return <p>{article.body}</p>
    }

    handleClick = () => this.props.toggleOpen(this.props.article.id)
}