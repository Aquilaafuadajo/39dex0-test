import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  min-width: 25rem;
  border-radius: 0.9rem;

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #313131;
    margin: 0;
  }

  h4 {
    font-size: 0.875rem;
    font-weight: 600;
    color: #9b9b9b;
    margin: 0;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

export const CloseButton = styled.button`
  outline: none;
  background: transparent;
  border: none;
  margin-left: auto;
`;
