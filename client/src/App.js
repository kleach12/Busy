import logo from './logo.svg';
import './App.css';
import {useEffect} from "react"
import Home from './Home/Home';
import { Routes, Route } from 'react-router-dom';

function App() {

  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => console.log(data))
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
