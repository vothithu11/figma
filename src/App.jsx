
import './App.scss'
import SideMenu from "./components/sideMenu/SideMenu"
import { MainContent } from "./components/mainContent/MainContent"
import { Inspector } from "./components/inspector/Inspector"


function App() {
  return (
   <div className="container">
    <SideMenu/>
    <MainContent/>
    <Inspector/>
   </div>
  )
}

export default App