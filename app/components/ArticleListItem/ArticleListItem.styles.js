import styled from 'styled-components'

const Row = styled.article`
    cursor: pointer;
    padding: 0.5rem 0 0.5rem 0.5rem;
    border-left: 3px solid #4bb5e8;
    margin-bottom: 1rem;

    &:hover {
        background-color: #f5f5f5;
    }
`

const Title = styled.h3`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
    color: black;
`

const Text = styled.p`
    font-size: 1rem;
    color: #727272;
`

export { Row, Title, Text }
