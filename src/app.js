import React, { Component } from 'react'
import ArticleList from './components/article_list'
import UserForm from './components/user_form'
import Filters from './components/filters'

export default class App extends Component {
    render () {
        return (
            <div>
                <Filters articles = {this.props.articles} />
                <UserForm />
                <ArticleList articles = {this.props.articles} />
            </div>
        )
    }
}