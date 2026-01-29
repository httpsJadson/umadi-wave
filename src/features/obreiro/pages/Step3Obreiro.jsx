function RadioCardGroup({
  title,
  name,
  options,
  value,
  onChange,
  cols = "sm:grid-cols-2",
  error,
}) {
  return (
    <div className={error ? "p-3 rounded-xl border border-red-300 bg-red-50/40" : ""}>
      <p className="font-semibold text-gray-700 mb-3">{title}</p>

      <div className={`grid grid-cols-1 ${cols} gap-3`}>
        {options.map((opt) => (
          <label
            key={opt}
            className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-50
              ${value === opt ? "border-cyan-600 ring-2 ring-cyan-200" : "border-gray-200"}
              ${error ? "border-red-300" : ""}
            `}
          >
            <input
              type="radio"
              name={name}
              checked={value === opt}
              onChange={() => onChange(opt)}
              className="h-5 w-5 accent-cyan-600"
            />
            <span className="text-gray-700">{opt}</span>
          </label>
        ))}
      </div>

      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
    </div>
  );
}

export default function Step3Obreiro({ form, setSingle, onPrev, onNext, errors = {} }) {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Perfil Pessoal (Etapa 3)
      </h2>

      <form className="space-y-8">
        <RadioCardGroup
          title="Você se considera uma pessoa mais:"
          name="perfilPessoal"
          options={[
            "Comunicativa e animada",
            "Observadora e atenta",
            "Organizada e responsável",
            "Técnica / gosta de equipamentos",
            "Cuidadosa e serve nos bastidores",
          ]}
          value={form.perfilPessoal}
          onChange={(opt) => setSingle("perfilPessoal", opt)}
          error={errors.perfilPessoal}
        />

        <RadioCardGroup
          title="Você lida bem com pressão e responsabilidade?"
          name="pressao"
          cols="sm:grid-cols-3"
          options={["Sim", "Mais ou menos", "Não muito"]}
          value={form.pressao}
          onChange={(opt) => setSingle("pressao", opt)}
          error={errors.pressao}
        />

        <RadioCardGroup
          title="Você é pontual com horários?"
          name="pontualidade"
          cols="sm:grid-cols-3"
          options={["Sempre", "Às vezes", "Tenho dificuldade"]}
          value={form.pontualidade}
          onChange={(opt) => setSingle("pontualidade", opt)}
          error={errors.pontualidade}
        />

        <RadioCardGroup
          title="Você prefere trabalhar:"
          name="preferenciaTrabalho"
          cols="sm:grid-cols-3"
          options={["Com o público", "Nos bastidores", "Tanto faz"]}
          value={form.preferenciaTrabalho}
          onChange={(opt) => setSingle("preferenciaTrabalho", opt)}
          error={errors.preferenciaTrabalho}
        />

        <button
          type="button"
          onClick={onNext}
          className="w-full py-4 bg-cyan-600 text-white rounded-xl hover:bg-cyan-500 transition font-semibold"
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
