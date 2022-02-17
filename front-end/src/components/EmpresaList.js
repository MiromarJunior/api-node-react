import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
              <th scope="col">ENDEREÇO</th>
              <th scope="col">BAIRRO</th>
              <th scope="col">MUNICIPIO</th>
              <th scope="col">CEP</th>
              <th scope="col">TELEFONE</th>
              
            </tr>
          </thead>
          <tbody>
            {empresas.map((empresa) => (
              <tr key={empresa._id}>
                
                <td >{empresa.razaoSocial}</td>
                <td>{empresa.cnpj}</td>
                <td>{empresa.endereco}</td>
                <td>{empresa.bairro}</td>
                <td>{empresa.municipio}</td>
                <td>{empresa.cep}</td>
                <td>{empresa.telefone}</td>
                <td>
                  
                  <button className="btn btn-danger ml-2" onClick={(e) => {
                   alert("Modulo não criado !!!")
                  }} >Delete</button>
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