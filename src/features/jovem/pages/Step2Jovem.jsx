import SingleChoice from "@/components/form/SingleChoice";
import TextField from "@/components/form/TextField";
import {
  computeStep2State,
  handleComoSoubeChange,
  handleComoConheceuChange,
} from "@/features/jovem/lib/step2";

export default function Step2Jovem({ form, setSingle, updateField, onPrev, onNext }) {
  const { congrega, naoCongrega, respostaOk } = computeStep2State(form);

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Sobre você (Etapa 2)
      </h2>

      <form className="space-y-6">
        {congrega && (
          <>
            <SingleChoice
              title="6. Como você ficou sabendo da Wave Conference?"
              name="comoSoube"
              value={form.comoSoube}
              onChange={(v) => handleComoSoubeChange(setSingle, v)}
              inputType="checkbox"
              options={[
                { label: "Amigos", value: "Amigos" },
                { label: "Redes sociais", value: "Redes sociais" },
                { label: "Convite de alguém da igreja", value: "Convite da igreja" },
                { label: "Outro", value: "Outro" },
              ]}
            />

            {form.comoSoube === "Outro" && (
              <TextField
                value={form.comoSoubeOutro}
                onChange={updateField("comoSoubeOutro")}
                placeholder="Escreva aqui..."
              />
            )}
          </>
        )}

        {naoCongrega && (
          <>
            <SingleChoice
              title="8. Como você conheceu a Wave Conference?"
              name="comoConheceu"
              value={form.comoConheceu}
              onChange={(v) => handleComoConheceuChange(setSingle, v)}
              inputType="checkbox"
              options={[
                { label: "Amigos", value: "Amigos" },
                { label: "Redes sociais", value: "Redes sociais" },
                { label: "Família", value: "Família" },
                { label: "Passando pela igreja / bairro", value: "Passando pela igreja / bairro" },
                { label: "Outro", value: "Outro" },
              ]}
            />

            {form.comoConheceu === "Outro" && (
              <TextField
                value={form.comoConheceuOutro}
                onChange={updateField("comoConheceuOutro")}
                placeholder="Escreva aqui..."
              />
            )}
          </>
        )}

        <button
          type="button"
          onClick={onNext}
          disabled={!respostaOk}
          className={`w-full py-4 rounded-xl transition font-semibold
          ${respostaOk ? "bg-cyan-600 text-white hover:bg-cyan-500" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
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
      </form>
    </>
  );
}
