import React from "react";
import { SidebarContainer, SidebarItems } from "./styled";
import { BuildSideBarItems } from "./BuildSideBarItems";

export type SidebarConfig = {
  title: string;
  icon?: React.FC;
  path?: string;
  action?: () => void;
  permissions?: string[];
  group?: SidebarConfig[];
};

export interface SidebarProps {
  config: SidebarConfig[];
}

export const Sidebar: React.FC<SidebarProps> = ({ config }) => {
  return (
    <SidebarContainer>
      <h1> A </h1>
      <SidebarItems>
        <BuildSideBarItems config={config} />
      </SidebarItems>

      <div />
    </SidebarContainer>
  );
};
