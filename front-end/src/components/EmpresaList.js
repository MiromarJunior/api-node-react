import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmpresaService from "../services/EmpresaService";
//import EmpresaServices from "../services/EmpresaService";
import apiServices from "../services/EmpresaService";


const EmpresaList = ()=>{
    const [empresas, setEmpresas] = useState([]);
   
    
    useEffect(() =>{
        init();
    },[]);


const init = () =>{
    apiServices
    .getAll()
      .then((response) => {
        console.log("Mostra dados clientes", response.data);
        setEmpresas(response.data);
        
      })
      .catch((error) => {
        console.log("Apenas erros", error);
      });
  }

  const deleteEmpresa = (_id) => {
    EmpresaService.remove(_id)
      .then((response) => {
        alert("Empresa removida com sucesso", response.data);
        init();
      })
      .catch((error) => {
        alert("Erro ao deletar ");
        console.log("Empresa removida com sucesso", error);
      })
  }


return (
    <div>
      <h3>Lista de Empresas</h3>
      <div className="table-responsive">
        <Link to="/salvar" className="btn btn-outline-primary">
          Cadastrar Empresa
        </Link>

        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Razão Social</th>
              <th scope="col">CNPJ </th>
              <th scope="col">INSCRICAO</th>
              <th scope="col">MUNICIPIO</th>
              <th scope="col">UF</th>
              <th scope="col">TELEFONE</th>
              
            </tr>
          </thead>
          <tbody>

           
             
            
            
            {empresas.map((empresa) => (
              <tr key={empresa._id}>
                
                <td >{empresa.razaoSocial}</td>
                <td>{empresa.cnpj}</td>
                <td>{empresa.inscricaoMunicipal}</td>
                <td>{empresa.endereco.municipio}</td>
                <td>{empresa.endereco.estado}</td>
                 <td>{empresa.telefone}</td>
                <td>            
                <Link to= {`/atualizar/${empresa._id}`}  className="btn btn-outline-primary">
          ATUALIZAR CADASTRO
        </Link>
                </td>
                <td>            
                  
                  <button className="btn btn-danger ml-2" onClick={(e) => {
                    var res = window.confirm("Deseja exluir a empresa : "+empresa.razaoSocial + "?" );
                      res ? deleteEmpresa(empresa._id) : alert("operação cancelada");
                  
                  }} >REMOVER EMPRESA</button>
                </td>


              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmpresaList;