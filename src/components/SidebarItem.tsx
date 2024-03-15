import { useNavigate } from "react-router";

interface SidebarItemProps {
  name: string;
  icon: React.ReactNode;
  link: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ name, icon, link }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex gap-2 px-10 w-full py-4 hover:bg-gray-200 cursor-pointer"
      onClick={() => {
        navigate(link);
      }}
    >
      <div>{icon}</div>
      <div>
        <span>{name}</span>
      </div>
    </div>
  );
};

export default SidebarItem;
