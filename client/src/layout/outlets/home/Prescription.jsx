import Icon from "@/icons/Icon";
import { useNavigate } from "react-router";

const Prescription = ({ prescription }) => {
  const { title, frequency, link } = prescription;
  const navigate = useNavigate();

  return (
    <div className="w-max shadow-lg [&>*]:p-2">
      <div className="bg-springgreen flex items-center gap-4 rounded-t-lg font-semibold text-white">
        <Icon name="pill" className="text-white" />
        <p>{title}</p>
        <button className="cursor-pointer" onClick={() => navigate(link)}>
          <Icon name="arrow" className="text-white" />
        </button>
      </div>
      <div className="bg-ghostwhite dark:bg-gunmetal flex items-center gap-4 rounded-b-lg dark:text-white">
        <Icon name="clock" className="text-richblack dark:text-white" />
        <p>{frequency}</p>
      </div>
    </div>
  );
};
export default Prescription;
