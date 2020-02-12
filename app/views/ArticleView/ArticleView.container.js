import { useState, useEffect } from 'react'
import { API_URL } from 'app/constants'

import Component from './ArticleView.component'

const ArticleView = ({
    match: {
        params: { articleId },
    },
}) => {
    const [article, setArticle] = useState({})

    const fetchArticle = async () => {
        try {
            const response = await fetch(`${API_URL}/articles/${articleId}`)
            setArticle(await response.json())
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    useEffect(() => {
        fetchArticle()
    }, [])

    return <Component article={article} />
}

export default ArticleView
