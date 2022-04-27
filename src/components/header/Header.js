import styled from 'styled-components'
import Navigation from './Navigation'

const MainHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    background: #741188;
    padding: 0 2rem;
    align-items: center;

    & h1 {
        color: white;
    }
`

const Header = () => {

    return (
        <MainHeader>
            <h1>Test Page</h1>
            <Navigation />
        </MainHeader>
    )
}
export default Header