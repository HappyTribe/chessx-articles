import { View } from 'app/styles'
import { Header, Paginator, ArticleList } from 'app/components/index'
import { HeaderTitle } from 'app/components/Header/Header.styles'

const ArticleListView = ({ articles }) => (
    <React.Fragment>
        <Header>
            <HeaderTitle>Articles</HeaderTitle>
        </Header>

        <View>
            <Paginator
                itemLimit={10}
                items={articles}
                itemListName="articles"
                component={ArticleList}
            />
        </View>
    </React.Fragment>
)

export default ArticleListView
