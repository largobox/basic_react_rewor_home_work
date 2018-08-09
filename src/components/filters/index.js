import React, { Component } from 'react'
import DateRange from './date_range'
import SelectFilter from './select'

export default class Filters extends Component {
    render () {
        return (
            <div>
                <DateRange />
                <SelectFilter articles = {this.props.articles} />
            </div>
        )
    }
}