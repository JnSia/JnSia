import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import AddText from './Pages/AddText';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/addText" element={<AddText />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
