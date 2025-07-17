const CustomInput = ({ name, value, onChange }) => {
  return (
    <input
      className="border-2 border-slate-300 p-4 rounded-xl focus:outline-emerald-800"
      type="text"
      placeholder={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
export default CustomInput;
