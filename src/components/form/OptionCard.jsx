export default function OptionCard({ label, checked, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left flex items-center gap-3 p-4 border rounded-2xl hover:bg-gray-50 transition
      ${checked ? "border-cyan-600 ring-2 ring-cyan-200" : ""}`}
    >
      <span
        className={`h-5 w-5 shrink-0 rounded-md border flex items-center justify-center
        ${checked ? "bg-cyan-600 border-cyan-600" : "bg-white border-gray-400"}`}
      >
        {checked ? <span className="h-2.5 w-2.5 bg-white rounded-sm" /> : null}
      </span>

      <span className="text-gray-800">{label}</span>
    </button>
  );
}
