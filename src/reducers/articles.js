import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'
import { arrToMap } from './utils'

export default (state = arrToMap(normalizedArticles), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case DELETE_ARTICLE:
            const articlesCopy = { ...state }
            delete articlesCopy[payload.id]
            return articlesCopy
        case ADD_COMMENT:
            const article = state[payload.articleId]
            return {
                ...state,
                [payload.articleId]: {
                    article,
                    comments: (article.comments || []).concat(randomId)
                }
            }
        default:
            return state
    }
}