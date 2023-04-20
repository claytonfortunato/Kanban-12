import Logo from "../../assets/Vector.png";
import portrait from "../../assets/icon/tablet-portrait.png";
import equips from "../../assets/icon/equips.png";
import relato from "../../assets/icon/relato.png";
import ajustes from "../../assets/icon/ajustes.png";

import * as C from "./styles";

export const Sidebar = () => {
  return (
    <C.Container>
      <img src={Logo} alt="" />

      <C.SidebarContainer>
        <a href="#" className="menu-item active">
          <img src={portrait} alt="" />
          <span>Boards</span>
        </a>

        <a href="#" className="menu-item">
          <img src={equips} alt="" />
          <span>Equipes</span>
        </a>

        <a href="#" className="menu-item">
          <img src={relato} alt="" />
          <span>Relatórios</span>
        </a>

        <a href="#" className="menu-item">
          <img src={ajustes} alt="" />
          <span>Ajustes</span>
        </a>
      </C.SidebarContainer>
    </C.Container>
  );
};
