import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpresaList from "./components/EmpresaList";
import EmpresaSave from "./components/EmpresaSave";
import NotFound from "./components/NotFound";



function App() {
  
 
  return (
    <BrowserRouter>
    <div>
      <div>
      
      <Routes>
        <Route path="/lista" element= {<EmpresaList/>} />
        <Route path="/salvar" element= {<EmpresaSave/>} />
        <Route path="/empresa/edit/:_id" element= {<EmpresaSave/>} />
        <Route path="*" element={<NotFound />} />
        
        
      </Routes>


      </div>
      
    </div>
  </BrowserRouter>

   
  );
}

export default App;
