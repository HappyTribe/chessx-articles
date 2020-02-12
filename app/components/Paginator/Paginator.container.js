import { useEffect, useState } from 'react'

import Child from './Paginator.component'

const limitItemsPerPage = ({ page, items, itemLimit }) => {
    const pageStart = page * itemLimit - itemLimit
    const pageEnd = page * itemLimit

    return items.slice(pageStart, pageEnd)
}

const Paginator = ({ component, itemLimit, items, itemListName }) => {
    const [page, setPage] = useState(1)
    let newProps = { [itemListName]: limitItemsPerPage({ page, items, itemLimit }) }

    useEffect(() => {
        newProps = { [itemListName]: limitItemsPerPage({ page, items, itemLimit }) }
    }, [page])

    const onIncreasePage = () => {
        const willContainItems = limitItemsPerPage({ page: page + 1, items, itemLimit }).length > 0
        if (willContainItems) {
            setPage(page + 1)
        }
    }
    const onDecreasePage = () => {
        const willContainItems = limitItemsPerPage({ page: page - 1, items, itemLimit }).length > 0
        if (willContainItems) {
            setPage(page - 1)
        }
    }

    return (
        <Child
            component={component}
            newProps={newProps}
            onDecreasePage={onDecreasePage}
            onIncreasePage={onIncreasePage}
        />
    )
}

export default Paginator
