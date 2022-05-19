import {
  SearchIcon,
  UserPlusIcon,
  DashboardIcon,
  TeamIcon,
  CalendarIcon,
  UserThreeIcon,
} from "../assets";

export type SidebarConfig = {
  title: string;
  icon?: React.FC;
  path?: string;
  action?: () => void;
  permissions?: string[];
  group?: SidebarConfig[];
};

export const sidebar: SidebarConfig[] = [
  {
    title: "Quick Actions",
    group: [
      {
        title: "Quick Search",
        icon: SearchIcon,
        path: "#search"
        //Todo:  this should let search modal to be opened from the sidebar
      },
      {
        title: "Add Patient",
        icon: UserPlusIcon,
        path: "#add-patient"
        //Todo:  this should let add patient modal to be opened from the sidebar
      }
    ]
  },
  {
    title: "Admin Controls",
    permissions: ["admin:base", "owner:base"],
    group: [
      {
        title: "Home",
        icon: DashboardIcon,
        path: "/home"
      },
      {
        title: "Another Page",
        icon: TeamIcon,
        path: "/another-page"
      }
    ]
  },
  {
    title: "Another Group ",
    group: [
      {
        title: "Just Some Page",
        icon: CalendarIcon,
        path: "/just-some-page"
      },
      {
        title: "Another Unknow Page",
        icon: UserThreeIcon,
        path: "/another-unknown-page"
      }
    ]
  }
];
