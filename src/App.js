import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Servicios from "./pages/Servicios";

export default function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Contacto" element={<Contacto />}/>
          <Route path="/Servicios" element={<Servicios />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}