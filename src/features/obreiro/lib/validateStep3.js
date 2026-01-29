export function validateStep3Obreiro(form) {
  const errors = {};

  if (!form.perfilPessoal?.trim()) errors.perfilPessoal = "Selecione uma opção.";
  if (!form.pressao?.trim()) errors.pressao = "Selecione uma opção.";
  if (!form.pontualidade?.trim()) errors.pontualidade = "Selecione uma opção.";
  if (!form.preferenciaTrabalho?.trim()) errors.preferenciaTrabalho = "Selecione uma opção.";

  return errors;
}
