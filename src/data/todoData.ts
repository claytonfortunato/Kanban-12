import { Todo } from "../@types/todos";

export const todoStatus = ["todo", "working", "done"];

export const todos: Todo[] = [
  {
    id: 1,
    title: "#boraCodar um kanban 🧑‍💻",
    description:
      "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
    tags: ["rocketseat", "desafio"],
    status: "todo",
  },
  {
    id: 2,
    title: "Manter a ofensiva 🔥",
    description:
      "Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva",
    tags: ["rocketseat"],
    status: "todo",
  },
  {
    id: 3,
    title: "Almoçar 🍽️",
    description:
      "Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço.",
    tags: ["autocuidado"],
    status: "todo",
  },
  {
    id: 4,
    title: "Conferir o novo desafio 🚀",
    description:
      "Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível.",
    tags: ["rocketseat", "desafio"],
    status: "working",
  },
  {
    id: 5,
    title: "Ser incrível 😎",
    description:
      "Sempre me lembrar de manter minha autenticidade e espalhar amor",
    tags: ["auto cuidado"],
    status: "working",
  },
  {
    id: 6,
    title: "#boraCodar uma página de login 💻",
    description:
      "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
    tags: ["rocketseat", "desafio"],
    status: "done",
  },
  {
    id: 7,
    title: "#boraCodar uma página de clima 💻",
    description:
      "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
    tags: ["rocketseat", "desafio"],
    status: "done",
  },
  {
    id: 8,
    title: "#boraCodar um conversor 🧑‍💻",
    description:
      "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
    tags: ["rocketseat", "desafio"],
    status: "done",
  },
];
