function Button({ name, onClick, text, type }) {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
      className={`inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded-md cursor-pointer whitespace-nowrap ${
        name === "secondary"
          ? "bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 disabled:border-indigo-300 disabled:bg-indigo-300"
          : name === "delete"
          ? "bg-rose-500 hover:bg-rose-600 focus:bg-rose-700 disabled:border-rose-300 disabled:bg-rose-300"
          : "bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:border-emerald-300 disabled:bg-emerald-300"
      }  focus-visible:outline-none disabled:cursor-not-allowed disabled:shadow-none`}
    >
      <span>{text}</span>
    </button>
  );
}

export default Button;
