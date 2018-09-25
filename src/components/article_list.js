import React, { Component } from 'react'
import ArticleListElement from './article_list_element'
import Loader from './common/loader'
import accordion from '../decorators/accordion'
import { connect } from 'react-redux'
import { filteredArticlesSelector, articlesLoadingSelector, articlesLoadedSelector } from '../selectors'
import { loadAllArticles } from '../ac'

class ArticleList extends Component {
    render () {
        if (this.props.loading) return <Loader />
        return <ul>{this.articles}</ul>
    }

    componentDidMount () {
        this.props.fetchData && !this.props.loaded && this.props.fetchData()
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

const mapStateToProps = (state) => ({
    articles: filteredArticlesSelector(state),
    loading: articlesLoadingSelector(state),
    loaded: articlesLoadedSelector(state)
})

export default connect(mapStateToProps, { fetchData: loadAllArticles })(accordion(ArticleList))