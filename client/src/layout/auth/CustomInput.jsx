const CustomInput = ({ name, value, onChange }) => {
  return (
    <input
      className="border-aliceblue focus:outline-springgreen rounded-xl border-2 p-4"
      type="text"
      placeholder={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
export default CustomInput;
