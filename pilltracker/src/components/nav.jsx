import styled from "styled-components";

const StyledNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin: 0;
    background: ${({ theme }) => theme.colors.cardBg};
    padding: 1rem;
    box-shadow:
        rgba(0, 0, 0, 0.12) 0px 1px 3px,
        rgba(0, 0, 0, 0.24) 0px 1px 2px;
    border-bottom: 1px solid rgba(1, 1, 1, 0.1);
    z-index: 1;

    ul {
        flex: 1;
    }

    li {
        display: inline;
        text-decoration: none;
        margin: 0;
        padding: 0.8rem 2rem 0.8rem 2rem;
        transition: outline 0.1s ease;
        border-radius: 0.2rem;
    }

    li:hover {
        outline: 2px solid rgba(0, 0, 0, 0.6);
        cursor: pointer;
    }
`;

const Nav = ({ children }) => {
    return (
        <StyledNav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            {children}
        </StyledNav>
    );
};

export default Nav;
