import { useSelector } from "react-redux";
import Course from "./Course";

const Courses = () => {
  const { courses } = useSelector((state) => state.user.value);

  return (
    <div className="px-4 py-8 relative h-full">
      <div className="space-y-8 w-1/2">
        {courses.map((course) => (
          <Course course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
};
export default Courses;
