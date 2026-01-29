export function computeStep1State(form) {
  const congrega = form.congregaIgreja; 
  const campo = form.campo; 

  const precisaConfirmarNao = congrega === "Não";
  const confirmouNao = form.naoCongregaConfirm === "Sim";

  const podeIr =
    form.nome?.trim() &&
    form.idade?.trim() &&
    (
      (congrega === "Não" && confirmouNao) ||
      (congrega === "Sim" &&
        campo &&
        (campo === "Campo"
          ? true 
          : form.nomeIgreja?.trim()))
    );

  return { congrega, campo, precisaConfirmarNao, podeIr };
}

export function resetAfterCongregaChange(setSingle, value) {
  setSingle("congregaIgreja", value);
  setSingle("campo", "");
  setSingle("congregacao", "");
  setSingle("nomeIgreja", "");
  setSingle("naoCongregaConfirm", "");
}

export function resetAfterCampoChange(setSingle, value) {
  setSingle("campo", value);
  setSingle("congregacao", "");
  setSingle("nomeIgreja", "");
}
