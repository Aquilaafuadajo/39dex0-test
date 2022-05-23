import React from "react";
import ReactDom from "react-dom";

import { CloseButton } from "./styled";

import { CancelIcon } from "src/assets";
import { ModalOverlay, ModalWrapper } from "./styled";

export type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
};

export const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const handleBackdropClick = (e: any) => {
    e.stopPropagation();
    onClose();
  };
  if (!isOpen) return null;
  return ReactDom.createPortal(
    <div>
      <ModalOverlay onClick={handleBackdropClick} />
      <ModalWrapper>
        <CloseButton
          onClick={() => {
            onClose();
          }}
        >
          <CancelIcon />
        </CloseButton>
        {children}
      </ModalWrapper>
    </div>,
    document.getElementById("modal-root")
  );
};
