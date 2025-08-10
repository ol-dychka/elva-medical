const formatDateTime = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
};

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
};

const convertDayToDateTime = ({ day, time }) => {
  console.log(day, time);
  const dayMap = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  };

  const targetDay = dayMap[day.toLowerCase()];
  console.log(targetDay);
  if (targetDay === undefined) return null;

  const [hourminute, part] = time.split(" ");
  let [hour, minute] = hourminute.split(":").map(Number);
  if (part === "PM") hour += 12;

  const now = new Date();
  const today = now.getDay();

  let dayOffset = (targetDay - today + 7) % 7;
  if (
    dayOffset === 0 &&
    (hour < now.getHours() ||
      (hour === now.getHours() && minute <= now.getMinutes()))
  ) {
    dayOffset = 7;
  }

  const result = new Date(now);
  result.setDate(now.getDate() + dayOffset);
  result.setHours(hour, minute, 0, 0);

  console.log(formatDateTime(result));
  return formatDateTime(result);
};

export { formatDateTime, formatDate, convertDayToDateTime };
