import Icon from "@/icons/Icon";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Search = () => {
  const navigate = useNavigate();
  const { appointments, courses, prescriptions } = useSelector(
    (state) => state.user.value,
  );

  const [input, setInput] = useState("");
  const [searchRes, setSearchRes] = useState(null);

  const searchArray = (array, link, fields, input) => {
    const res = [];

    for (let element of array) {
      for (let field of fields) {
        if (element[field].toLowerCase().includes(input)) {
          res.push({ id: element.id, field: element[field], link });
        }
      }
    }

    return res;
  };

  const handleSearch = () => {
    const appointmentsRes = searchArray(
      appointments,
      "appointments",
      ["doctorName", "roomNumber"],
      input,
    );
    const coursesRes = searchArray(
      courses,
      "courses",
      ["title", "instructor"],
      input,
    );
    const prescriptionsRes = searchArray(
      prescriptions,
      "prescriptions",
      ["medication"],
      input,
    );

    setSearchRes([...appointmentsRes, ...coursesRes, ...prescriptionsRes]);
    document.addEventListener("click", handleClick);
  };

  const handleClick = (e) => {
    if (e.target.closest("#search")) return;
    setSearchRes(null);
    document.removeEventListener("click", handleClick);
  };

  return (
    <div className="relative">
      <div className="flex items-center rounded-4xl bg-white p-2">
        <input
          type="text"
          placeholder="Search"
          className="mx-2 border-none focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <button id="search" onClick={handleSearch} className="cursor-pointer">
          <Icon name="search" className="text-richblack" />
        </button>
      </div>

      {searchRes?.length === 0 && (
        <div className="dark:bg-richblack shadow-aliceblue dark:shadow-gunmetal absolute top-[110%] z-100 rounded-2xl bg-white p-4 shadow-lg">
          <p className="text-richblack dark:text-white">No information found</p>
        </div>
      )}

      {searchRes && searchRes.length > 0 && (
        <div className="dark:bg-richblack shadow-aliceblue dark:shadow-gunmetal absolute top-[110%] z-100 space-y-4 rounded-2xl bg-white p-4 shadow-lg">
          {searchRes.map((res, i) => (
            <div
              className="flex items-center justify-between gap-2"
              key={res.id + i}
            >
              <p className="text-richblack dark:text-white">{res.field}</p>
              <p className="text-oslogrey">{res.link}</p>
              <button
                className="cursor-pointer"
                onClick={() => {
                  console.log("navigating");
                  navigate(res.link);
                }}
              >
                <Icon
                  name="arrowRight"
                  className="text-richblack hover:text-springgreen dark:text-white"
                />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Search;
