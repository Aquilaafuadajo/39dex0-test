import React from "react";
import { ModalContainer } from "./styled";
import "./style.css";
// import { BuildSideBarItems } from "./BuildSideBarItems";

// export type ModalConfig = {
//   title: string;
//   action?: () => void;
// };

// export interface SidebarProps {
//   // config: SidebarConfig[];
// }

const Modal = () => {
  return (
    <ModalContainer>
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="title">Patient Bio-Data</h1>
          <h3 className="subtitle">
            Please fill in patients bio-data, this is important to setup a new
            patient record
          </h3>
        </div>
      </div>
    </ModalContainer>
  );
};

export default Modal;
