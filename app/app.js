import { hot } from 'react-hot-loader'
import { Router, Route } from 'react-router-dom'
import history from './history'

import { GlobalStyle, View } from './styles'
import { ArticleView, ArticleListView } from './views/index'

const Application = () => (
    <React.Fragment>
        <GlobalStyle />

        <Router history={history}>
            <Route exact path="/" component={ArticleListView} />
            <Route exact path="/article-:articleId" component={ArticleView} />
        </Router>
    </React.Fragment>
)

export default hot(module)(Application)
