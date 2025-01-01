import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Routes, Route, Link, useLocation,
  Navigate,
  useNavigate
} from "react-router-dom";
import api from './api';
import axios from 'axios';
import { Home } from './pages/home';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        {/* <Route
            path="*"
            element={<Navigate to="/admin/make" replace />}
        /> */}
      </Routes>
    </div>
  );
}

export default App;
