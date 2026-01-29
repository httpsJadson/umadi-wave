export default function TextField({ value, onChange, placeholder, error }) {
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        className={`w-full px-5 py-4 border rounded-xl focus:ring-2
          ${error ? "border-red-500 ring-red-200 focus:ring-red-200" : "focus:ring-cyan-500"}
        `}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}

