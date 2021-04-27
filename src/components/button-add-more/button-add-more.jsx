import { BiAddToQueue } from "react-icons/bi";
import { useHistory } from "react-router-dom";
export const ButtonAddMore = ({ route }) => {
  const history = useHistory();
  const redirectRouter = route => {
    history.push(route);
  };
  return (
    <button
      style={{ outline: "none" }}
      className="flex hover:underline"
      onClick={() => redirectRouter(route)}
    >
      <p className="custom-outline font-semibold">Create</p>
      <BiAddToQueue className="outline-none text-2xl ml-2 " />
    </button>
  );
};
