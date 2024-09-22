import {
  BoxerIcon,
  Clock02Icon,
  ContactIcon,
  Home01Icon,
  HugeiconsProps,
  InboxCheckIcon,
  PackageIcon,
  ShampooIcon,
  UserGroupIcon,
  WorkHistoryIcon,
} from "hugeicons-react";

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
    title: "Estoque",
    items: [
      {
        label: "Estoque",
        redirectTo: "/inventory",
        Icon: PackageIcon,
      },
      {
        label: "Histórico",
        redirectTo: "/inventory/history",
        Icon: InboxCheckIcon,
      },
      {
        label: "Produtos",
        redirectTo: "/inventory/products",
        Icon: ShampooIcon,
      },
    ],
  },
  {
    title: "Parceiros",
    items: [
      {
        label: "Parceiros",
        redirectTo: "/partners",
        Icon: UserGroupIcon,
      },
      {
        label: "Contatos",
        redirectTo: "/partners/contacts",
        Icon: ContactIcon,
      },
    ],
  },
];
