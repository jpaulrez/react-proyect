import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainFooter from './common/MainFooter'
import MainHeader from './common/MainHeader'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import ServicioClientes from './pages/ServicioClientes'

function App() {

  return (
    <>
    <BrowserRouter>
      <MainHeader/>

      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/servicioClientes' element={<ServicioClientes/>}/>
        <Route path='/productos' element={<Productos/>}/>
      </Routes>

      <MainFooter/>
    </BrowserRouter>
    </>
  )
}

export default App
