import { SiderBar } from "./components/SideBar";
import { Header } from "./components/Header";
import { TabBar } from "./components/TabBar";
import { Widgets } from "./components/Widgets";
import { Graph } from "./components/Graph";

import './styles/global.scss'


function App() {
  return (
    <>
      <SiderBar />
      <Header />
      <TabBar />
      <Widgets />
      <Graph />
    </>
  );
}

export default App;
