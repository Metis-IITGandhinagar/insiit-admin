import ActionCard from "../components/ActionCard";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";

interface MessRouteProps {}

const MessRoute: React.FC<MessRouteProps> = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center p-10">
        <div className="text-2xl font-bold">Mess</div>
      </div>
      <div>
        <ActionCard actionLink="/mess/add" actionName="Add Mess" icon={<AddBusinessIcon />} />
        <ActionCard actionLink="/mess/add" actionName="Update Mess Details" icon={<AddBusinessIcon />} />
        <ActionCard actionLink="/mess/add" actionName="Delete Mess" icon={<AddBusinessIcon />} />
        <ActionCard actionLink="/mess/menu/edit" actionName="Manage Mess Menu" icon={<AddBusinessIcon />} />
      </div>
    </div>
  );
};

export default MessRoute;
