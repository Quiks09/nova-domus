import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import { useState } from 'react';
import Login from './Components/Login';
import Landing from './Components/Landing';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

const Body = () => {
  const [showMenu, setShowMenu] = useState(false);
  return(
    <div>
    <Header setShowMenu={setShowMenu} showMenu = {showMenu}/>
      <div id="body">
        <Menu showMenu = {showMenu}/>
        <BrowserRouter>
          <Routes>
            <Route path="/landing" element={<Landing/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </BrowserRouter>
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
