export const oficinasPorDia = [
  {
    dayTitle: "Segunda-feira",
    field: "oficinaSegunda",
    options: [
      "Evangelismo Pessoal",
      "Projetos que Nascem no Coração de Deus",
      "Discipulado que Funciona",
    ],
  },
  {
    dayTitle: "Terça-feira",
    field: "oficinaTerca",
    options: ["Chamados para Cuidar", "Jovens que Lideram", "Louvor e Adoração"],
  },
  {
    dayTitle: "Quarta-feira",
    field: "oficinaQuarta",
    options: [
      "Chamados para Cuidar (continuação)",
      "Jovens que Lideram (continuação)",
      "Evangelismo Digital",
    ],
  },
];

export function canGoNextStep3(form) {
  return Boolean(form.oficinaSegunda && form.oficinaTerca && form.oficinaQuarta);
}

export function handleSelectOficina(setSingle, field, opt) {
  setSingle(field, opt);
}
