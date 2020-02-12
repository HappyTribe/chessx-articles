import { Link } from 'react-router-dom'

import { Row, Title, Text } from './ArticleListItem.styles'

const ArticleListItem = ({ article }) => (
    <Link to={`/article-${article.id}`}>
        <Row>
            <Title>{article.title}</Title>
            <Text>{article.text.slice(0, 100)}...</Text>
        </Row>
    </Link>
)

export default ArticleListItem
