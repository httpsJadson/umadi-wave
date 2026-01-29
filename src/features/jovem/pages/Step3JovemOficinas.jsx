import DayBlock from "@/features/jovem/components/DayBlock";
import {
  oficinasPorDia,
  canGoNextStep3,
  handleSelectOficina,
} from "@/features/jovem/lib/step3Oficinas";

export default function Step3JovemOficinas({ form, setSingle, onPrev, onNext }) {
  const podeIr = canGoNextStep3(form);

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
        Oficinas (Etapa 3)
      </h2>

      <p className="text-center text-gray-500 mb-8">
        Escolha <b>1 oficina por dia</b> (Segunda, Terça e Quarta).
      </p>

      <div className="space-y-10">
        {oficinasPorDia.map((d) => (
          <DayBlock
            key={d.field}
            dayTitle={d.dayTitle}
            field={d.field}
            value={form[d.field]}
            options={d.options}
            onSelect={(field, opt) => handleSelectOficina(setSingle, field, opt)}
          />
        ))}
      </div>

      <div className="mt-10 space-y-4">
        <button
          type="button"
          disabled={!podeIr}
          onClick={onNext}
          className={`w-full py-4 rounded-xl transition font-semibold
          ${
            podeIr
              ? "bg-cyan-600 text-white hover:bg-cyan-500"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Próximo
        </button>

        <button
          type="button"
          onClick={onPrev}
          className="block mx-auto text-sm text-gray-500 hover:underline"
        >
          Voltar
        </button>
      </div>
    </>
  );
}
