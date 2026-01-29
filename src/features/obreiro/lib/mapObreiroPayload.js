export function mapObreiroPayload(form) {
  return {
    nome: form.nome,
    idade: Number(form.idade),
    congregacao: form.congregacao || null,
    whatsapp: form.whatsapp,

    tempoIgreja: form.tempoIgreja,
    batismo: form.batismo,
    voluntario: form.voluntario,
    area: form.area,
    equipe: form.equipe,

    perfilPessoal: form.perfilPessoal,
    pressao: form.pressao,
    pontualidade: form.pontualidade,
    preferenciaTrabalho: form.preferenciaTrabalho,

    setoresPrioridade: form.setoresPrioridade,
    habilidadeEspecial: form.habilidadeEspecial || null,
    disponibilidadeGeral: form.disponibilidadeGeral,
  };
}
