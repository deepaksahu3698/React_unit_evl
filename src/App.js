import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./Componet/Navbar"
import Login from "./Componet/Login"
import { Homepage } from './Componet/Homepage';
import { MoviesDetails } from "./Componet/Moviedetails";
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <h1>Hello</h1> */}
      <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/:movieid" element={<MoviesDetails />}></Route>

        
      </Routes>
    </div>
  );
}

export default App;
