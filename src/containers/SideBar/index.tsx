import React from "react";
import { SidebarContainer, SidebarItems } from "./styled";
import { BuildSideBarItems } from "./BuildSideBarItems";
import GetRouteModal from "src/components/GetRouteModal";

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
  const [modalHash, setModalHash] = React.useState("");
  React.useEffect(() => {
    if (window.location.href.includes("#")) {
      setModalHash(window.location.href.split("#")[1]);
    }
  }, []);

  return (
    <SidebarContainer>
      <h1> A </h1>
      <SidebarItems>
        <BuildSideBarItems setModalOpen={setModalHash} config={config} />
        <GetRouteModal modalHash={modalHash} setModalHash={setModalHash} />
      </SidebarItems>

      <div />
    </SidebarContainer>
  );
};
