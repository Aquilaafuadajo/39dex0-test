import React from "react";
// import { SidebarContainer, SidebarItems } from "./styled";
// import { BuildSideBarItems } from "./BuildSideBarItems";

export type ModalConfig = {
  title: string;
  action?: () => void;
};

export interface SidebarProps {
  // config: SidebarConfig[];
}

export const Modal: React.FC<SidebarProps> = () => {
  return (
    <div></div>
  );
};
