import { Row, Button } from './Paginator.styles'

const Paginator = ({ component: Component, newProps, onDecreasePage, onIncreasePage }) => (
    <React.Fragment>
        <Component {...newProps} />

        <Row>
            <Button onClick={onDecreasePage}>Prev Page</Button>
            <Button onClick={onIncreasePage}>Next Page</Button>
        </Row>
    </React.Fragment>
)

export default Paginator
