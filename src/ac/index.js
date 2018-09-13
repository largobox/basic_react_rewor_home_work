import { INCREMENT, DELETE_ARTICLE, CHANGE_DATE_RANGE, CHANGE_SELECTION, ADD_COMMENT } from '../constants'

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const deleteArticle = (id) => {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export const changeDateRange = (dateRange) => {
    return {
        type: CHANGE_DATE_RANGE,
        payload: { dateRange }
    }
}

export const changeSelection = (selected) => {
    return {
        type: CHANGE_SELECTION,
        payload: { selected }
    }
}

export const addComment = (comment, articleId) => {
    return {
        type: ADD_COMMENT,
        payload: { comment, articleId },
        generateId: true
    }
}