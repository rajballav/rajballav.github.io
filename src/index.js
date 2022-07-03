import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';

import Home from "./routes/Home";
import Login from './routes/Login';
import Signin from './routes/Signin';
import Userstate from './context/Userstate'
import App from './App'




ReactDOM.render(
  <React.StrictMode>

    <Userstate>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/Login" element={<Login />} />
          <Route path="/Signin" element={<Signin />} />
          {}
          <Route path="/App" element={<App/>} />

        </Routes>
      </BrowserRouter>,

    </Userstate>

  </React.StrictMode>,
  document.getElementById('root')
);


