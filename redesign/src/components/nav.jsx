import styled from 'styled-components'

const StyledNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin: 0;
    background: ${({ theme }) => theme.colors.cardBg};
    padding: 1rem;

    ul {
        flex: 1;
    }

    li {
        display: inline;
        text-decoration: none;
        margin: 0;
        padding: 1rem 2rem 1rem 2rem;
        outline: 2px solid black;
    }
`

const Nav = ({ children }) => {
    return (
        <StyledNav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            { children }
        </StyledNav>
    )
}

export default Nav;
