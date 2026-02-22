import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import Home from "./pages/home.jsx";
import Nav from './components/nav.jsx'
import { darkTheme } from "./themes/dark.js";
import { lightTheme } from "./themes/light.js";

const StyledLayout = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    max-width: 100vw;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: background 0.8s ease;

    h1 {
        font-size: 4rem;
    }
`;

const StyledThemeToggle = styled.button`
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
    border: none;
    height: 2rem;
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    border-radius: 1rem;
    transition: all 0.8s ease;
`;
const App = () => {
    const [count, setCount] = useState(0);
    const [isDark, setIsDark] = useState(true);

    const handleThemeChange = () => {
        setIsDark((prevState) => !prevState);
    };

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <StyledLayout>
                    <StyledThemeToggle
                        onClick={() => setIsDark((prevState) => !prevState)}
                    >
                        {isDark ? <BiSolidSun /> : <BiSolidMoon />}
                    </StyledThemeToggle>
                <Home />
            </StyledLayout>
        </ThemeProvider>
    );
};

export default App;
