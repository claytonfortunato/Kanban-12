import { PencilSimple } from "phosphor-react";

import * as C from "./styles";

export const Header = () => {
  return (
    <C.Container>
      <h1>
        Meu Kanban <PencilSimple size={22} />{" "}
      </h1>
      <img src="https://github.com/claytonfortunato.png" alt="" />
    </C.Container>
  );
};
