import React, { Component } from 'react'
import ArticleListElement from './article_list_element'
import accordion from '../decorators/accordion'
import { connect } from 'react-redux'
import { filteredArticlesSelector } from '../selectors'

class ArticleList extends Component {
    render () {
        console.log('ArticleList RENDER')
        return <ul>{this.articles}</ul>
    }

    get articles () {
        return this.props.articles.map( article => 
                    <ArticleListElement key        = {article.id}
                                        article    = {article}
                                        isOpen     = {this.props.openItemId === article.id}
                                        toggleOpen = {this.props.toggleOpenItem}
                    />
                )
    }
}

const mapStateToProps = (state) => {
    console.log('ArticleList CONNECT')
    return {
        articles: filteredArticlesSelector(state)
    }
}

export default connect(mapStateToProps, {})(accordion(ArticleList))