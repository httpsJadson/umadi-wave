export default function SingleChoice({ title, name, options, value, onChange, error }) {
  return (
    <div className={error ? "p-3 rounded-xl border border-red-300 bg-red-50/40" : ""}>
      <p className="font-semibold text-gray-700 mb-3">{title}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((opt) => (
          <label
            key={opt.value}
            className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-50
              ${value === opt.value ? "border-cyan-600 ring-2 ring-cyan-200" : "border-gray-200"}
              ${error ? "border-red-300" : ""}
            `}
          >
            <input
              type="radio"
              name={name}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="h-5 w-5 accent-cyan-600"
            />
            <span className="text-gray-700">{opt.label}</span>
          </label>
        ))}
      </div>

      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
    </div>
  );
}
