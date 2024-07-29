import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Content from './Components/Content';
import { useState } from 'react';
import Login from './Components/Login';

const login = true

const Body = () => {
  const [showMenu, setShowMenu] = useState(false);
  if(!login){
    return(<Login/>)
  } else
  return(
    <div>
    <Header setShowMenu={setShowMenu} showMenu = {showMenu}/>
      <div id="body">
        <Menu showMenu = {showMenu}/>
        <Content/>
      </div>
    </div>
  )
}

function App() {
  
  return (
    <div className="App">
      <Body>

      </Body>
    </div>
  );
}

export default App;
