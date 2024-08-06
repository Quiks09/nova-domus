import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import { useState } from 'react';
import Login from './Components/Login';
import Landing from './Components/Landing';
import { Routes, Route } from 'react-router-dom';

const Body = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [roles, setRoles]= useState(['admin'])
  return(
    <div>
    <Header setShowMenu={setShowMenu} showMenu = {showMenu}/>
      <div id="body">
        <Menu showMenu = {showMenu} roles = { roles }/>
          <Routes>
            <Route path="/landing" element={<Landing/>} />
            <Route path="/login" element={<Login setRoles={ setRoles }/>} />
          </Routes>
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
