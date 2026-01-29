export function validateStep1Jovem(form) {
  const errors = {};

  if (!form.nome?.trim()) errors.nome = "Informe seu nome completo";
  if (!form.idade?.trim()) errors.idade = "Informe sua idade";

  if (!form.congregaIgreja) errors.congregaIgreja = "Selecione uma opção";

  if (form.congregaIgreja === "Não") {
    if (form.naoCongregaConfirm !== "Sim") {
      errors.naoCongregaConfirm = "Confirme para continuar";
    }
  }

  if (form.congregaIgreja === "Sim") {
    if (!form.campo) errors.campo = "Selecione uma opção";

    if (form.campo === "Outra" && !form.nomeIgreja?.trim()) {
      errors.nomeIgreja = "Digite o nome da sua igreja";
    }

    
  }

  return errors;
}
