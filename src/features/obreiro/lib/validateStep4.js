export function validateStep4Obreiro(form) {
  const errors = {};

  const setores = form.setoresPrioridade || [];
  if (setores.length !== 5) {
    errors.setoresPrioridade = "Escolha exatamente 5 opções (em ordem de prioridade).";
  }

  if (!form.disponibilidadeGeral?.trim()) {
    errors.disponibilidadeGeral = "Selecione uma opção.";
  }

  return errors;
}
