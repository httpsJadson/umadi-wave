export function validateStep2Obreiro(form) {
  const errors = {};

  if (!form.tempoIgreja?.trim()) errors.tempoIgreja = "Selecione uma opção.";
  if (!form.batismo?.trim()) errors.batismo = "Selecione uma opção.";
  if (!form.voluntario?.trim()) errors.voluntario = "Selecione uma opção.";
  if (!form.area?.trim()) errors.area = "Selecione uma opção.";
  if (!form.equipe?.trim()) errors.equipe = "Selecione uma opção.";

  return errors;
}
