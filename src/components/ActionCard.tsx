import { useNavigate } from "react-router";

interface ActionCardProps {
  actionName: string;
  actionLink: string;
  icon: React.ReactNode;
}

const ActionCard: React.FC<ActionCardProps> = ({ actionLink, actionName, icon }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="flex gap-2 px-10 w-full py-4 hover:bg-gray-200 cursor-pointer"
        onClick={() => {
          navigate(actionLink);
        }}
      >
        <div>{icon}</div>
        <div>
          <span>{actionName}</span>
        </div>
      </div>
    </div>
  );
};

export default ActionCard;
