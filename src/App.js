// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainComponent from './component/MainComponent';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Book bookname="1984" writer="goerge oewell" />
//         <Book bookname="1985" writer="goerge oewell" />
//         <Book bookname="1986" writer="goerge oewell" />
//         {/* <h2>hello</h2> */}
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  );
}
export default App;
