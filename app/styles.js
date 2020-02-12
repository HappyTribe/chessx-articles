import styled, { createGlobalStyle } from 'styled-components'

const View = styled.div`
    width: 100%;
    max-width: 31.25rem;
    padding: 0 1rem;
    margin: 3rem auto;
`

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto';
    }

    a {
        text-decoration: none;
    }
`

export { GlobalStyle, View }
