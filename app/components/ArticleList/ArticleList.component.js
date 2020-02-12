import { ArticleListItem } from '../index'

const ArticleList = ({ articles }) => (
    <React.Fragment>
        {articles ? (
            articles.map(article => <ArticleListItem key={article.id} article={article} />)
        ) : (
            <div>Article List is empty {JSON.stringify(articles)}</div>
        )}
    </React.Fragment>
)

export default ArticleList
