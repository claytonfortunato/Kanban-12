import Logo from "../../assets/Vector.png";

import * as C from "./styles";

export const Sidebar = () => {
  return (
    <C.Container>
      <img src={Logo} alt="" />

      <C.SidebarContainer>
        <a href="#" className="menu-item active">
          Boards
        </a>

        <a href="#" className="menu-item">
          Equipes
        </a>

        <a href="#" className="menu-item">
          Relatórios
        </a>

        <a href="#" className="menu-item">
          Ajustes
        </a>
      </C.SidebarContainer>
    </C.Container>
  );
};
