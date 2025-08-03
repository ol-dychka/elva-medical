import Icon from "@/icons/Icon";

const Search = () => {
  return (
    <div className="flex items-center rounded-4xl bg-white p-2">
      <input
        type="text"
        placeholder="Search"
        className="mx-2 border-none focus:outline-none"
      />
      <button>
        <Icon name="search" className="text-richblack" />
      </button>
    </div>
  );
};
export default Search;
