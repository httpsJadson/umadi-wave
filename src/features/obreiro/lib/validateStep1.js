export function validateStep1Obreiro(form) {
  const errors = {};

  if (!form.nome?.trim()) errors.nome = "Informe seu nome completo";
  if (!form.idade?.trim()) errors.idade = "Informe sua idade";
  if (!form.congregacao?.trim()) errors.congregacao = "Informe sua congregação";
  if (!form.whatsapp?.trim()) errors.whatsapp = "Informe seu WhatsApp";

  return errors;
}
