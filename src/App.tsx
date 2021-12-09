import { SiderBar } from "./components/SideBar";
import { Header } from "./components/Header";
import { TabBar } from "./components/TabBar";
import { Widgets } from "./components/Widgets";

import './styles/global.scss'


function App() {
  return (
    <>
      <SiderBar />
      <Header />
      <TabBar />
      <Widgets />
    </>
  );
}

export default App;
