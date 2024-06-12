import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Content from './Components/Content';


function App() {
  return (
    <div className="App">
      <Header/>
      <div id="body">
        <Menu/>
        <Content/>
      </div>

    </div>
  );
}

export default App;
