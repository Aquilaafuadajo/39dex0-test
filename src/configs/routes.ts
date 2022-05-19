import { lazy } from "react";
import { RouteProps } from "wouter";

export interface RouteInterface extends RouteProps {
  component: React.LazyExoticComponent<React.FC>;
  subRoutes?: RouteInterface[];
  isModal?: boolean;
  hasSidebar?: boolean;
  isBase?: true;
}

export const routes: RouteInterface[] = [
  {
    path: "/home",
    component: lazy(() => import("../pages/Home")),
    hasSidebar: true,
    isBase: true
  },
  {
    path: "/another-page",
    component: lazy(() => import("../pages/AnotherPage")),
    hasSidebar: true
  }
];
