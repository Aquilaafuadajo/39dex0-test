import React from "react";
import { useLocation } from "wouter";
import { HR, SidebarItem } from "./styled";

export type SidebarConfig = {
  title: string;
  icon?: React.FC;
  path?: string;
  action?: () => void;
  permissions?: string[];
  group?: SidebarConfig[];
};

export type BuildSideBarItemsProps = {
  config: SidebarConfig[];
  setModalOpen?: (hash: string) => void;
};

export const BuildSideBarItems: React.FC<BuildSideBarItemsProps> = ({
  config,
  setModalOpen,
}) => {
  const [location, setLocation] = useLocation();

  return (
    <>
      {config.map((item, index) => {
        const { icon: Icon } = item;
        const isActive = !!(item.path && location.indexOf(item.path) > -1);

        if (item.group) {
          return (
            <React.Fragment key={`sb-line-group-${index}`}>
              <BuildSideBarItems
                key={`sb-line-group-${index}`}
                config={item.group}
                setModalOpen={setModalOpen}
              />
              {index < config.length - 1 && <HR key={`sb-line-${index}`} />}
            </React.Fragment>
          );
        }

        return (
          <SidebarItem
            title={item.title}
            variant={isActive ? "solid" : "text"}
            active={isActive}
            color="grey"
            key={`sb-item-${index}`}
            onClick={() => {
              if (item.action) item.action();
              if (item.path) {
                if (item.path.includes("#")) {
                  setModalOpen(item.path.split("#")[1]);
                }
                setLocation(item.path);
              }
            }}
          >
            {Icon ? <Icon /> : null}
          </SidebarItem>
        );
      })}
    </>
  );
};
