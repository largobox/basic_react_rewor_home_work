import React, { Component } from 'react'
import ArticleList from './components/article_list'
import UserForm from './components/user_form'
import Select from 'react-select'

export default class App extends Component {
    state = {
        selected: null
    }

    handleSelectChange = (selected) => this.setState({ selected })

    render () {
        console.log('State: ', this.state)
        return (
            <div>
                <UserForm />
                <Select options = {this.options}
                        onChange = {this.handleSelectChange}
                        value = {this.state.selected}
                />
                <ArticleList articles = {this.props.articles} />
            </div>
        )
    }

    get options () {
        return this.props.articles.map( (article) => ({
                label: article.title,
                value: article.id
            }) 
        )
    }
}