import styled from "styled-components";

const StyledShade = styled.div`
    height: 100vh;
    width: 100vw;
    max-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${({ showmodal }) => (showmodal ? "1" : "0")};
    z-index: ${({ showmodal }) => (showmodal ? "100" : "-1")};
    transition:
        opacity 0.4s ease,
        z-index 0.4s ease;
`;

const StyledModal = styled.div`
    width: 400px;
    background: ${({ theme }) => theme.colors.background};
    border-radius: 0.5rem;
    padding: 1.3rem 1.6rem 1.3rem 1.6rem;
`;

const StyledCloseButton = styled.button``;

const Modal = ({ showModal, toggleModal }) => {
    return (
        <StyledShade showmodal={+showModal}>
            <StyledModal>
                Modal
                <StyledCloseButton onClick={() => toggleModal()}>
                    X
                </StyledCloseButton>
            </StyledModal>
        </StyledShade>
    );
};

export default Modal;
