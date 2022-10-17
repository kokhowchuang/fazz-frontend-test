// ** Icon imports
import Table from "mdi-material-ui/Table";
import HomeOutline from "mdi-material-ui/HomeOutline";
import AccountCogOutline from "mdi-material-ui/AccountCogOutline";

// ** Type import
import { VerticalNavItemsType } from "src/@core/layouts/types";

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: "Dashboard",
      icon: HomeOutline,
      path: "/",
    },
    {
      sectionTitle: "User Interface",
    },
    {
      title: "Tables",
      icon: Table,
      path: "/tables",
    },
  ];
};

export default navigation;
