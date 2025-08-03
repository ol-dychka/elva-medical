import { formatDate } from "@/helpers/formatDate";
import Icon from "@/icons/Icon";

const Prescription = ({ prescription }) => {
  const { startDate, finishDate, frequency, medication } = prescription;
  const formattedStartDate = formatDate(startDate);
  const formattedFinishDate = formatDate(finishDate);

  return (
    <div className="relative [&>*]:p-4">
      <div className="bg-springgreen flex items-center gap-4 rounded-t-lg font-semibold text-white">
        <Icon name="pill" className="text-white" />

        <p>{medication}</p>
      </div>
      <div className="bg-ghostwhite dark:bg-gunmetal space-y-4 rounded-b-lg dark:text-white">
        <div className="flex items-center gap-4">
          <Icon name="calendar" className="text-richblack dark:text-white" />
          <p>{frequency}</p>
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
export default Prescription;
