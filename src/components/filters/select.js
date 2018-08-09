import React, { Component } from 'react'
import Select from 'react-select'

export default class SelectFilter extends Component {
    state = {
        selected: null
    }

    render () {
        return (
            <Select options = {this.options}
                    onChange = {this.handleSelectChange}
                    value = {this.state.selected}
                    isMulti
            />
        )
    }

    handleSelectChange = (selected) => this.setState({ selected })

    get options () {
        return this.props.articles.map( (article) => ({
                label: article.title,
                value: article.id
            }) 
        )
    }    
}