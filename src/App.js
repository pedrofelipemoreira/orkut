import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Componentes/Home';
import { DiAndroid } from "react-icons/di";
import Navbar from './Componentes/Navbar';
import Menu from './Componentes/Menu';
import Amigos from './Componentes/Amigos';
import Comun from './Componentes/Comun'; 
import Publi from './Componentes/Publi'
import PubliPerfil from './Componentes/Publi-perfil';
import Login from './Componentes/Login';








function App() {
  return (
    <div>
      <Router>
      <header>
        <Navbar/>
      </header>
      <section>
        <Menu/>
      </section>
      <aside>
        <Amigos/>
      </aside>
      
      <body className='meio'>
        
        <Routes>
          <Route path="/Publi" element={<Publi/>} /> 
          <Route path="/Comun" element={<Comun/>} />
          <Route path='/PubliPerfil' element={<PubliPerfil/>} />
        </Routes>
      </body>
      </Router>
    </div>
  );
}

export default App;
