import styled from "styled-components";

const StyledFooter = styled.footer`
    margin: 2rem;

    a {
        color: ${({ theme }) => theme.colors.tag };
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
`

const Footer = () => {
    return (
        <StyledFooter>Built with ☕️ by <a href="https://ethanling.com">Ethan Ling</a> in 2024.</StyledFooter>
    )
};

export default Footer;
