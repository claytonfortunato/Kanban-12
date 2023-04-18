import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

import * as C from "./styles";

export const Home = () => {
  return (
    <C.Container>
      <Sidebar />
      <C.ContainerKanban>
        <Header />
      </C.ContainerKanban>
    </C.Container>
  );
};
