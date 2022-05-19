import { Sidebar } from "../SideBar";
import { Suspense } from "react";
import { Redirect } from "wouter";
import { RouteWrapper, SidebarWrapper } from "./styled";
import { Route, Switch } from "wouter";
import { sidebar } from "../../configs/sidebar";
import { RouteInterface } from "src/configs/routes";

export type RouterProps = {
  routes: RouteInterface[];
  base?: string;
};

export const RouteBuilder: React.FC<RouterProps> = ({ routes }) => {
  return (
    <RouteWrapper>
      <Switch>
        <>
          {routes.map(({ path, component: Component, isBase, hasSidebar }) => {
            return (
              <>
                {isBase && path && (
                  <Route key="/" path="/">
                    <Redirect href={path} />
                  </Route>
                )}
                <Route key={path} path={path}>
                  {hasSidebar ? (
                    <SidebarWrapper gap={3} width="100%">
                      <Sidebar config={sidebar} />
                      <Suspense fallback={<h1>Loading...</h1>}>
                        <Component />
                      </Suspense>
                    </SidebarWrapper>
                  ) : (
                    <Suspense fallback={<h1>Loading...</h1>}>
                      <Component />
                    </Suspense>
                  )}
                </Route>
              </>
            );
          })}
        </>
        <Route path={`/:rest*`}>
          <h1>404 | Not Found</h1>
        </Route>
      </Switch>
    </RouteWrapper>
  );
};
