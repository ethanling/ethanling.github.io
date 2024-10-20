import { useState } from "react";
import styled from "styled-components";
import Modal from "../components/modal";
import Drawer from "../components/drawer";


const StyledContainer = styled.div`
    width: 80%;
    padding: 2rem 0 0 0;

    h1 {
        display: inline;
        flex: 1;
    }
`;

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
`;

const StyledItem = styled.li`
    background: ${({ theme }) => theme.colors.cardBg};
    list-style-type: none;
    padding: 1.3rem 1.6rem 1.3rem 1.6rem;
    margin: 1rem 0 1rem 0;
    border-radius: 0.5rem;
    box-shadow:
        rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    display: flex;
    flex-direction: column;
    outline: 1px solid rgba(1, 1, 1, 0.1);

    h3 {
        display: inline;
        flex: 1;
        margin: 0;
        padding: 0;
    }

    p {
    }
`;

const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

const StyledTag = styled.div`
    font-size: 0.8rem;
    padding: 0.3rem 0.7rem 0.3rem 0.7rem;
    background: ${({ theme }) => theme.colors.tag};
    opacity: ${({ display }) => (display ? "1" : "0")};
    color: ${({ theme }) => theme.colors.tagText};
    outline: 1px solid ${({ theme }) => theme.colors.tagOutline};
    font-weight: bold;
    border-radius: 0.4rem;
    box-shadow:
        rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const StyledAddButton = styled.button`
    border-radius: 0.4rem;
    padding: 0.5rem;
    height: 2rem;
    margin: 0;
    margin-right: 0.5rem;
    border: none;

    &:hover {
        cursor: pointer;
    }
`;

const Home = ({ defaultState }) => {
    const [meds, setMeds] = useState(defaultState);
    const [showModal, setShowModal] = useState(false);

    const medPerDay = (hours) => {
        return 24 / hours;
    };

    const toggleModal = () => {
        setShowModal((prevState) => !prevState);
    };

    return (
        <StyledContainer>
            <StyledRow>
                <h1>Pill Tracker</h1>
                <StyledAddButton onClick={toggleModal}>
                    Add Prescription +
                </StyledAddButton>
            </StyledRow>
            <Modal showModal={showModal} toggleModal={toggleModal} />
            <StyledList>
                {meds.map((item) => (
                    <StyledItem key={item.name}>
                        <StyledRow>
                            <h3>{item.name}</h3>
                            <StyledTag className="tag" display={+item.withFood}>
                                {item.withFood ? "Take with Food" : ""}
                            </StyledTag>
                        </StyledRow>
                        <p>
                            Take {medPerDay(item.hourOffset)} time
                            {medPerDay(item.hourOffset) < 2 ? "" : "s"} per day,
                            every {item.hourOffset} hours.
                        </p>
                    </StyledItem>
                ))}
            </StyledList>
        </StyledContainer>
    );
};

export default Home;
