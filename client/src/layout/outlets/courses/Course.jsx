import { formatDate } from "@/helpers/formatDate";
import Icon from "@/icons/Icon";

const Course = ({ course }) => {
  const { title, instructor, finishDate, startDate, schedule } = course;
  const formattedStartDate = formatDate(startDate);
  const formattedFinishDate = formatDate(finishDate);
  const formattedSchedule = schedule.map(
    (session) => `${session.day}, ${session.time}`,
  );

  return (
    <div className="relative [&>*]:p-4">
      <div className="bg-springgreen flex items-center gap-4 rounded-t-lg font-semibold text-white">
        <Icon name="leaf" className="text-white" />
        <p>{title}</p>
      </div>
      <div className="bg-ghostwhite dark:bg-gunmetal space-y-4 rounded-b-lg dark:text-white">
        <div className="flex items-center gap-4">
          <Icon name="account" className="text-richblack dark:text-white" />

          <p>{instructor}</p>
        </div>
        <div className="flex items-center gap-4">
          <Icon name="calendar" className="text-richblack dark:text-white" />
          <div>
            {formattedSchedule.map((session, index) => (
              <p key={index}>{session}</p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Icon name="clock" className="text-richblack dark:text-white" />
          <p>
            {formattedStartDate} - {formattedFinishDate}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Course;
