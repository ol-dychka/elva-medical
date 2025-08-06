import { useState } from "react";
import api from "@/api/api";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/reducers/user";
import { formatDateTime } from "@/helpers/formatDate";
import Icon from "@/icons/Icon";

const Appointment = ({ appointment }) => {
  const dispatch = useDispatch();

  const { id, title, doctorName, roomNumber, date } = appointment;

  const formattedDate = formatDateTime(date);

  const [isCalendar, setIsCalendar] = useState(false);
  const [newDate, setNewDate] = useState(null);
  const [newTime, setNewTime] = useState(null);

  const handleCalendar = async () => {
    setIsCalendar(!isCalendar);

    if (isCalendar && newTime && newDate) {
      console.log(newDate);
      console.log(newTime);
      console.log(id);

      const res = await api.post(`user/appointment/${id}`, {
        date: `${newDate}T${newTime}`,
      });

      console.log("app user upd.: ", res.data);

      if (res.data) dispatch(setUser(res.data));
    }
  };

  return (
    <div className="relative shadow-lg [&>*]:p-4">
      <div className="bg-springgreen flex items-center justify-between rounded-t-lg font-semibold text-white">
        <p>{title}</p>
        <button className="cursor-pointer" onClick={handleCalendar}>
          <Icon
            name={isCalendar ? "checkCircle" : "calendarEdit"}
            className="text-white"
          />
        </button>
      </div>
      <div className="bg-ghostwhite dark:bg-gunmetal space-y-4 rounded-b-lg dark:text-white">
        <div className="flex items-center gap-4">
          <Icon name="account" className="text-richblack dark:text-white" />
          <p>{doctorName}</p>
        </div>
        <div className="flex items-center gap-4">
          <Icon name="door" className="text-richblack dark:text-white" />
          <p>{roomNumber}</p>
        </div>
        <div className="flex items-center gap-4">
          <Icon name="clock" className="text-richblack dark:text-white" />

          <p>{formattedDate}</p>
        </div>
      </div>

      {isCalendar && (
        <div className="absolute top-0 -right-50 flex flex-col gap-4">
          <input
            type="date"
            className="focus:outline-springgreen border-aliceblue rounded-xl border-2 p-2"
            onChange={(e) => {
              setNewDate(e.target.value);
            }}
          />
          <input
            type="time"
            step="60"
            className="focus:outline-springgreen border-aliceblue rounded-xl border-2 p-2"
            onChange={(e) => {
              setNewTime(e.target.value);
            }}
          />
        </div>
      )}
    </div>
  );
};
export default Appointment;
