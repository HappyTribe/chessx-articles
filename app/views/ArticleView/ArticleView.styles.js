import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BackButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 4rem;
    height: 4rem;
`

const Arrow = styled.span`
    font-size: 2.5rem;
    transform: scale(0.6, 1);
`

const Card = styled.article`
    padding: 1.5rem;
    border: 1px solid #eaeaea;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    border-radius: 0.3rem;
    margin-top: 2rem;
`

const Title = styled.h1`
    font-size: 1.75rem;
    margin-bottom: 1rem;
`

const Text = styled.p``

export { BackButton, Arrow, Card, Title, Text }
