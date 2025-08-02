import { formatDate } from "../../../helpers/formatDate";
import Pill from "../../../assets/pill.svg";
import Calendar from "../../../assets/calendar.svg";
import Clock from "../../../assets/clock.svg";

const Prescription = ({ prescription }) => {
  const { startDate, finishDate, frequency, medication } = prescription;
  const formattedStartDate = formatDate(startDate);
  const formattedFinishDate = formatDate(finishDate);

  return (
    <div className="relative [&>*]:p-4">
      <div className="bg-springgreen flex items-center gap-4 rounded-t-lg font-semibold text-white">
        <img src={Pill} alt="pill" className="h-6 w-6" />
        <p>{medication}</p>
      </div>
      <div className="bg-ghostwhite dark:bg-gunmetal space-y-4 rounded-b-lg dark:text-white">
        <div className="flex items-center gap-4">
          <img src={Calendar} alt="calendar" className="h-4 w-4" />
          <p>{frequency}</p>
        </div>
        <div className="flex items-center gap-4">
          <img src={Clock} alt="clock" className="h-4 w-4" />
          <p>
            {formattedStartDate} - {formattedFinishDate}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Prescription;
