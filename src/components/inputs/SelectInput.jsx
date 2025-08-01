function SelectInput({ name, label, value, onChange, options }) {
  return (
    <div>
      <label className="block my-0.5 text-sm font-semibold text-gray-700">
        {label}
      </label>
      <select
        className="p-2 border w-full rounded-md"
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.name} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
