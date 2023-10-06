import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Home from './Home'
import Exercicio01 from './exercicios/01'
import Exercicio02 from './exercicios/02'

import SwitchTheme from './components/SwitchTheme'

function App() {
  const [tema, setTema] = useState('temaClaro');

  const handleThemeChange = (event) => {
    console.log("trocando tema")
    let novoTema = !event.target.checked ? "temaClaro" : "temaEscuro";

    setTema(novoTema);

  }

  return (
    <>
      {/* <Switch id='switch' defaultChecked onChange={handleThemeChange} color="warning" /> */}
      <SwitchTheme onChange={handleThemeChange}/>
      <div className={tema}>
        <h1>Exercícios de React Hooks</h1>
        <BrowserRouter>

          <ul style={{ listStyleType: 'none' /* Lista sem marcadores */ }}>
            <li> <Link to="/">Página Inicial</Link> </li>
            <li> <Link to="/01">Exercício 01</Link> </li>
            <li> <Link to="/02">Exercício 02</Link> </li>
          </ul>

          <hr />


          <div style={{ border: '1px solid blue', padding: '20px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/01" element={<Exercicio01 />} />
              <Route path="/02" element={<Exercicio02 />} />
            </Routes>
          </div>

        </BrowserRouter>
      </div>
    </>
  )
}

export default App
