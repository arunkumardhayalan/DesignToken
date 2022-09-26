import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LoginPage from './components/Login/LoginPage';
import DesignToken from './components/DesignToken/DesignToken';
import Hooks from './components/Hooks/Hooks';
import Froms from './components/Forms/Forms'
import { Routes, Route } from "react-router-dom";
import './App.css';
import './scss/global.scss'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/designToken" element={<DesignToken />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/forms" element={<Froms />} />        
      </Routes>
    </div>
  );
}

export default App;
