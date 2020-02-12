import { useState, useEffect } from 'react'
import { API_URL } from 'app/constants'

import Component from './ArticleListView.component'

const ArticleListView = () => {
    const [articles, setArticles] = useState([])

    const fetchArticles = async () => {
        try {
            const response = await fetch(`${API_URL}/articles`)
            setArticles(await response.json())
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    useEffect(() => {
        fetchArticles()
    }, [])

    return <Component articles={articles} />
}

export default ArticleListView
