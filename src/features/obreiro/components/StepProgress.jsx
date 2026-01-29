export default function StepProgress({ step, max = 4 }) {
  if (step > max) return null;

  return (
    <div className="mb-8 flex items-center justify-center gap-3">
      {Array.from({ length: max }).map((_, i) => {
        const idx = i + 1;
        return (
          <div
            key={idx}
            className={`h-2 w-16 rounded-full ${
              step === idx ? "bg-cyan-600" : "bg-gray-200"
            }`}
          />
        );
      })}
    </div>
  );
}
