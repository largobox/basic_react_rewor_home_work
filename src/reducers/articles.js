import { DELETE_ARTICLE } from '../constants'
import articles from '../fixtures'

export default (articlesState = articles, action) => {
    const { type } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter( article => article.id !== action.payload.id )
        default:
            return articlesState
    }
}