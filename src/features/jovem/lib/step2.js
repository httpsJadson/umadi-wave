export function computeStep2State(form) {
  const congrega = form.congregaIgreja === "Sim";
  const naoCongrega = form.congregaIgreja === "Não";

  const respostaOk =
    (congrega &&
      form.comoSoube &&
      (form.comoSoube !== "Outro" || (form.comoSoubeOutro || "").trim())) ||
    (naoCongrega &&
      form.comoConheceu &&
      (form.comoConheceu !== "Outro" || (form.comoConheceuOutro || "").trim()));

  return { congrega, naoCongrega, respostaOk };
}

export function handleComoSoubeChange(setSingle, v) {
  setSingle("comoSoube", v);
  if (v !== "Outro") setSingle("comoSoubeOutro", "");
}

export function handleComoConheceuChange(setSingle, v) {
  setSingle("comoConheceu", v);
  if (v !== "Outro") setSingle("comoConheceuOutro", "");
}
