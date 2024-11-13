import LayoutAdmin from "~/components/Layout/LayoutAdmin";
import LayoutManager from "~/components/Layout/LayoutManager";
import Dashboard from "~/pages/Admin/Dashboard";
import EmployeeForm from "~/pages/Manager/EmployeeForm";
import Payroll from "~/pages/Manager/Payroll";
import PromotionManagement from "~/pages/Manager/PromotionManagement";

const publicRoutes = [
  { path: "/dashboard", component: Dashboard, layout: LayoutAdmin },
  {
    path: "/Manager/Payroll",
    component: Payroll,
    layout: LayoutManager,
  },
  {
    path: "/Manager/employees",
    component: EmployeeForm,
    layout: LayoutManager,
  },
  {
    path: "/Manager/PromotionManagement",
    component: PromotionManagement,
    layout: LayoutManager,
  },
];

//Private Routers
const privateRoutes = [];

export { publicRoutes, privateRoutes };
