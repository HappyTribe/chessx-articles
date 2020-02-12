import { Link } from 'react-router-dom'
import { BackButton, Arrow, Card, Title, Text } from './ArticleView.styles'
import { View } from 'app/styles'
import { Header } from 'app/components/index'
import { HeaderTitle } from 'app/components/Header/Header.styles'

const ArticleView = ({ article }) => (
    <React.Fragment>
        <Header>
            <BackButton to="/">
                <Arrow>{'<'}</Arrow>
            </BackButton>
            <HeaderTitle>{article.title}</HeaderTitle>
        </Header>

        <View>
            <Card>
                <Text>{article.text}</Text>
            </Card>
        </View>
    </React.Fragment>
)

export default ArticleView
