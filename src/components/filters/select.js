import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../../ac'
import { articlesSelector, filtersSelector } from '../../selectors'

class SelectFilter extends Component {
    render () {
        return (
            <Select options = {this.options}
                    onChange = {this.handleSelectChange}
                    value = {this.props.selected}
                    isMulti
            />
        )
    }

    handleSelectChange = (selected) => {
        this.props.changeSelection(selected)
    }

    get options () {
        return this.props.articles.map( (article) => ({
                label: article.title,
                value: article.id
            }) 
        )
    }    
}

export default connect(
    (state) => ({
        selected: filtersSelector(state).selected,
        articles: articlesSelector(state)
    }),
    { changeSelection }
)(SelectFilter)  