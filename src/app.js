import React, { Component } from 'react'
import ArticleList from './components/article_list'
import UserForm from './components/user_form'
import Filters from './components/filters'
import Counter from './components/counter'

export default class App extends Component {
    render () {
        return (
            <div>
                <UserForm />
                <Counter />
                <Filters articles = {[]} />
                <ArticleList />
            </div>
        )
    }
}