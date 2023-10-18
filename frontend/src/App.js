import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from "./components/Signup";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Login} ></Route>
          <Route exact path="/signup" Component={Signup} ></Route>
          <Route exact path="/home" Component={Home} ></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
