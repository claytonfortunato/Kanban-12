import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

import * as C from "./styles";
import { Search } from "../../components/Search";

export const Home = () => {
  return (
    <C.Container>
      <Sidebar />
      <C.ContainerKanban>
        <Header />
        <Search />
      </C.ContainerKanban>
    </C.Container>
  );
};
