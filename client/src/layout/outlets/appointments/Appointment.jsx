import Clock from "../../../assets/clock.svg";
import Door from "../../../assets/door.svg";
import Calendar from "../../../assets/calendar-edit.svg";
import Account from "../../../assets/account-bl.svg";
import Check from "../../../assets/check-circle-wh.svg";
import { useState } from "react";
import api from "../../../api/api";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/reducers/user";
import { formatDateTime } from "../../../helpers/formatDate";

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

      if (res.data) dispatch(setUser(res.data));
    }
  };

  return (
    <div className="relative [&>*]:p-4">
      <div className="bg-springgreen flex items-center justify-between rounded-t-lg font-semibold text-white">
        <p>{title}</p>
        <img
          src={isCalendar ? Check : Calendar}
          alt="calendar"
          className="h-6 w-6 cursor-pointer"
          onClick={handleCalendar}
        />
      </div>
      <div className="bg-ghostwhite dark:bg-gunmetal space-y-4 rounded-b-lg dark:text-white">
        <div className="flex items-center gap-4">
          <img src={Account} alt="account" className="h-4 w-4" />
          <p>{doctorName}</p>
        </div>
        <div className="flex items-center gap-4">
          <img src={Door} alt="door" className="h-4 w-4" />
          <p>{roomNumber}</p>
        </div>
        <div className="flex items-center gap-4">
          <img src={Clock} alt="clock" className="h-4 w-4" />
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
