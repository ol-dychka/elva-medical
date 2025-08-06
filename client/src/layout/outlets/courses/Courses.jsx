import { useSelector } from "react-redux";
import Course from "./Course";

const Courses = () => {
  const { courses } = useSelector((state) => state.user.value);

  return (
    <div className="h-full px-4 py-8">
      <div className="w-1/2 space-y-8">
        {courses.map((course) => (
          <Course course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
};
export default Courses;
