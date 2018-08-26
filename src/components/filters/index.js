import React, { Component } from 'react'
import DateRange from './date_range'
import SelectFilter from './select'
import { connect } from 'react-redux'

class Filters extends Component {
    render () {
        return (
            <div>
                <DateRange />
                <SelectFilter />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    articles: state.articles,
})

export default connect(mapStateToProps)(Filters)