import { DELETE_ARTICLE, CHANGE_DATE_RANGE, CHANGE_SELECTION } from '../constants'

const defaultFilters = {
    dateRange: {
        from: null,
        to: null
    },
    selected: []
}

export default (filters = defaultFilters, action) => {
    const { type, payload } = action

    switch (type) {
        case CHANGE_DATE_RANGE:
            return { ...filters, dateRange: payload.dateRange }
        case CHANGE_SELECTION:
            return { ...filters, selected: payload.selected }
        case DELETE_ARTICLE:
            return { ...filters, seleted: filters.selected.filter(
                    (seletedArticle) => seletedArticle.value !== payload.id
                ) 
            }                        
        default:
            return filters
    }    

}