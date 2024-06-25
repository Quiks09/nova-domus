import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Content from './Components/Content';
import { useState } from 'react';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="App">
      <Header setShowMenu={setShowMenu} showMenu = {showMenu}/>
      <div id="body">
        <Menu showMenu = {showMenu}/>
        <Content/>
      </div>

    </div>
  );
}

export default App;
