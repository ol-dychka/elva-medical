import Icon from "@/icons/Icon";
import { useNavigate } from "react-router";

const Event = ({ event }) => {
  const { date, title, link } = event;
  const navigate = useNavigate();

  return (
    <div className="w-max shadow-lg [&>*]:p-2">
      <div className="bg-springgreen flex items-center gap-4 rounded-t-lg font-semibold text-white">
        <Icon name="calendar" className="text-white" />
        <p>{title}</p>
        <button className="cursor-pointer" onClick={() => navigate(link)}>
          <Icon name="arrow" className="text-white" />
        </button>
      </div>
      <div className="bg-ghostwhite dark:bg-gunmetal flex items-center gap-4 rounded-b-lg dark:text-white">
        <Icon name="clock" className="text-richblack dark:text-white" />
        <p>{date}</p>
      </div>
    </div>
  );
};
export default Event;
