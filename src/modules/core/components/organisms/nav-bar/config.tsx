import { Home01Icon, HugeiconsProps } from "hugeicons-react";

interface MenuItem {
  label: string;
  redirectTo: string;
  Icon: React.FC<
    Omit<HugeiconsProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

interface MenuGroup {
  title: string;
  items: MenuItem[];
}

export const menuList: MenuGroup[] = [
  {
    title: "Home",
    items: [
      {
        label: "Home",
        redirectTo: "/",
        Icon: Home01Icon,
      },
    ],
  },
  {
    title: "Partners",
    items: [
      {
        label: "Partners",
        redirectTo: "/partners",
        Icon: Home01Icon,
      },
      {
        label: "Contacts",
        redirectTo: "/partners/contacts",
        Icon: Home01Icon,
      },
    ],
  },
];
