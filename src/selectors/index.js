import { createSelector } from 'reselect'

export const articlesSelector = state => state.articles
export const commentsSelector = state => state.comments
export const filtersSelector = state => state.filters
export const idSelector = (_, props) => props.id

export const filteredArticlesSelector = createSelector(articlesSelector, filtersSelector, (articles, filters) => {
        const {
            selected,
            dateRange: { from, to }
        } = filters

        const filteredArticles = articles.filter( (article) => {
            const published = Date.parse(article.date)

            return (
                (!selected.length || selected.find( (selected) => selected.value === article.id ) )
                &&
                (!from || !to || (published > from && published < to))
            )
        })

        return filteredArticles
    }
)

export const createCommentSelector = () => createSelector(commentsSelector, idSelector, (comments, id) => {
    return comments[id]
})