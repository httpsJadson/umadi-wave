export function mapJovemPayload(form) {
  return {
    nome: form.nome,
    idade: Number(form.idade),
    congregaIgreja: form.congregaIgreja === "Sim",
    congregacao: form.congregacao || null,
    nomeIgreja: form.nomeIgreja || null,

    oficinas: {
      segunda: form.oficinaSegunda,
      terca: form.oficinaTerca,
      quarta: form.oficinaQuarta,
    },

    criadoEm: new Date().toISOString(),
  };
}
