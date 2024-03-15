import HomeIcon from "@mui/icons-material/Home";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SidebarItem from "./SidebarItem";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="w-1/3 max-w-96 h-screen py-10 border-r-2 border-gray-200">
      <div className="flex w-full flex-col">
        <SidebarItem name="Home" icon={<HomeIcon />} link="/home" />
        <SidebarItem name="Mess" icon={<RestaurantIcon />} link="/mess" />
        <SidebarItem name="Home" icon={<HomeIcon />} link="/home" />
      </div>
    </div>
  );
};

export default Sidebar;
