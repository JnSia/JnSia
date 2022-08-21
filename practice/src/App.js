import './App.css';
import Hello from './component/Hello.js';
import Welcome from './component/Welcome.js';
import World from './component/World.js';
import styles from './App.module.css';
import NewWorld from './component/New-World.js';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

// REST API: URI 주소와 method를 통해 CRUD를 호출
//    Create: POST
//    Read: GET
//    Update: PUT
//    Delete: DELETE

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<DayList />}></Route>
          <Route path="/day/:day" element={<Day />}></Route>
          <Route path="/create_word" element={<CreateWord />}></Route>
          <Route path="/create_day" element={<CreateDay />}></Route>
          <Route path="*" element={<EmptyPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );

  // const name = 'Junsu';
  // const naver = {
  //   name: '네이버',
  //   url: 'https://naver.com',
  // };
  // return (
  //   <div className="App">
  //     <h1
  //       style={{
  //         color: '#f0f',
  //         backgroundColor: 'green',
  //       }}
  //     >
  //       Welcome, {name}.<p>{2 + 3}</p>
  //     </h1>
  //     <Hello></Hello>
  //     <div className={styles.box}>App</div>
  //     <Welcome></Welcome>
  //     <World></World>
  //     <h1>Bye</h1>
  //     <World></World>
  //     <a href={naver.url}>{naver.name}</a>
  //     <hr />
  //     <NewWorld age={10}></NewWorld>
  //     <NewWorld age={20}></NewWorld>
  //     <NewWorld age={30}></NewWorld>
  //   </div>
  // );
}

// JavaScript XML (JSX)

export default App;
