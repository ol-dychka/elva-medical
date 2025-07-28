import { formatDate } from "../../../helpers/formatDate";
import Leaf from "../../../assets/leaf.svg";
import Calendar from "../../../assets/calendar.svg";
import Clock from "../../../assets/clock.svg";
import Account from "../../../assets/account-bl.svg";

const Course = ({ course }) => {
  const { title, instructor, finishDate, startDate, schedule } = course;
  const formattedStartDate = formatDate(startDate);
  const formattedFinishDate = formatDate(finishDate);
  const formattedSchedule = schedule.map(
    (session) => `${session.day}, ${session.time}`
  );

  return (
    <div className="[&>*]:p-4 relative">
      <div className="bg-emerald-700 text-white font-semibold rounded-t-lg flex gap-4 items-center">
        <img src={Leaf} alt="pill" className="h-6 w-6" />
        <p>{title}</p>
      </div>
      <div className="bg-slate-100 rounded-b-lg space-y-4">
        <div className="flex gap-4 items-center">
          <img src={Account} alt="account" className="h-4 w-4" />
          <p>{instructor}</p>
        </div>
        <div className="flex gap-4 items-center">
          <img src={Calendar} alt="calendar" className="h-4 w-4" />
          <div>
            {formattedSchedule.map((session, index) => (
              <p key={index}>{session}</p>
            ))}
          </div>
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
export default Course;
