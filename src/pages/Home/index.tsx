import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

import * as C from "./styles";
import { Search } from "../../components/Search";
import { BoardContainer } from "../../components/BoardContainer";

export function Home() {
  return (
    <C.Container>
      <Sidebar />
      <C.ContainerKanban>
        <Header />
        <Search />
        <BoardContainer />
      </C.ContainerKanban>
    </C.Container>
  );
}
