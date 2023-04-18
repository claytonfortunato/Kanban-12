import { FunnelSimple } from "phosphor-react";
import { MagnifyingGlass } from "phosphor-react";

import * as C from "./styles";

export const Search = () => {
  return (
    <C.FormContainer>
      <button>
        <FunnelSimple />
        Filtrar
      </button>
      <C.InputWrapper>
        <MagnifyingGlass />

        <input
          type="text"
          placeholder="Busque por cards, assuntos ou responsáveis..."
        />
      </C.InputWrapper>
    </C.FormContainer>
  );
};
