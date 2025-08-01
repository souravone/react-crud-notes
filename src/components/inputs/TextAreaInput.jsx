function TextAreaInput({ name, label, value, onChange, required = false }) {
  return (
    <div>
      <label className="block my-0.5 text-sm font-semibold text-gray-700">
        {label}
      </label>
      <textarea
        type="text"
        className="p-2 border w-full rounded-md"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default TextAreaInput;
