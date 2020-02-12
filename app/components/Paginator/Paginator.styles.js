import styled from 'styled-components'

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`

const Button = styled.button`
    outline: none;
    border: none;
    border-radius: 0.25rem;
    border: 1px solid #eaeaea;
    background-color: white;
    cursor: pointer;
    padding: 0.25rem 1rem;
    font-size: 1rem;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 1px 3px 0px rgba(0, 0, 0, 0.12);

    &:hover {
        background-color: #ededed;
    }
`

export { Row, Button }
