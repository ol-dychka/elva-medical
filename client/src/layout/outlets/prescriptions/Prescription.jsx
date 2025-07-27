import { formatDate } from "../../../helpers/formatDate";
import Pill from "../../../assets/pill.svg";
import Calendar from "../../../assets/calendar.svg";
import Clock from "../../../assets/clock.svg";

const Prescription = ({ prescription }) => {
  const { startDate, finishDate, frequency, medication } = prescription;
  const formattedStartDate = formatDate(startDate);
  const formattedFinishDate = formatDate(finishDate);

  return (
    <div className="[&>*]:p-4 relative">
      <div className="bg-emerald-700 text-white rounded-t-lg flex gap-4 items-center">
        <img src={Pill} alt="pill" className="h-6 w-6" />
        <p>{medication}</p>
      </div>
      <div className="bg-slate-100 rounded-b-lg">
        <div className="flex gap-4 items-center">
          <img src={Calendar} alt="calendar" className="h-4 w-4" />
          <p>{frequency}</p>
        </div>
        <div className="flex gap-4 items-center">
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
