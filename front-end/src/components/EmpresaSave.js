import { useEffect, useState } from "react";
import { Link , useParams} from "react-router-dom";
import empresaService from "../services/EmpresaService";
import "bootstrap/dist/css/bootstrap.min.css";


const EmpresaSave = ()=>{
    const [razaoSocial, setRazaoSocial] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [endereco, setEndereco] = useState("");
    const[bairro, setBairro] = useState("");
    const[municipio, setMunicipio] = useState("");
    const[cep, setCep] = useState("");
    const[telefone, setTelefone] = useState("");
    const { _id } = useParams();

    const saveEmpresa = ()=> {
      
        const empresas = {
            razaoSocial,
            cnpj,
            endereco,
            bairro,
            municipio,
            cep,
            telefone

        };
        if(_id){
            empresaService
            .update(empresas)
            .then((response) =>{
                console.log("Empresa atualizada com sucesso !!");
                window.location("/lista");
            })
            .catch((error) => {
                console.log("Erro ao Atualizar!!!", error);
      
                alert("Erro ao cadastrar!!");
              });

        }else{
            empresaService.create(empresas)
            .then((response) => {
                console.log("Empresa cadastrada com sucesso!!", response.data);
          alert("Empresa cadastrada com sucesso!!");
          window.location = "/lista";
        })
        .catch((error) => {
          console.log("Erro ao cadastrar", error);

          alert("Erro ao cadastrar!!");
        });

        }
    }

    useEffect(() =>{
        if(_id){
            empresaService.getId(_id)
            .then(empresa => {
                setRazaoSocial(empresa.data.razaoSocial);
                setCnpj(empresa.data.cnpj);
                setEndereco(empresa.data.endereco);
                setBairro(empresa.data.bairro);
                setMunicipio(empresa.data.municipio);
                setCep(empresa.data.cep);
                setTelefone(empresa.data.telefone)

            })
        }
    },[_id])  
    return (
        <div className="container">
          <h3>Cadastrar Clientes</h3>
          <hr />
          <form>
            <div className="form-group">
              <label>Razão Social </label>
              <input
                type="text"
                className="form-control col-4"
                id="nome"
                value={razaoSocial}
                onChange={(e) => setRazaoSocial(e.target.value)}
                placeholder="Razão Social"
              />
            </div>
            <div className="form-group">
              <label>CNPJ </label>
              <input
                type="text"
                className="form-control col-4"
                id="cnpj"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
                placeholder="CNPJ"
                required
              />
            </div>
            <div className="form-group">
              <label>ENDEREÇO </label>
              <input
                type="text"
                className="form-control col-4"
                id="endereco"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                placeholder="ENDEREÇO"
                required
              />
            </div>
            <div className="form-group">
              <label>BAIRRO </label>
              <input
                type="text"
                className="form-control col-4"
                id="bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                placeholder="BAIRRO"
                required
              />
            </div>
            <div className="form-group">
              <label>MINICIPIO </label>
              <input
                type="text"
                className="form-control col-4"
                id="municipio"
                value={municipio}
                onChange={(e) => setMunicipio(e.target.value)}
                placeholder="MUNICIPIO"
                required
              />
            </div>
            <div className="form-group">
              <label>CEP </label>
              <input
                type="text"
                className="form-control col-4"
                id="cep"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                placeholder="CEP"
                required
              />
            </div>
            <div className="form-group">
              <label>Telefone </label>
              <input
                type="text"
                className="form-control col-4"
                id="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="TELEFONE"
                required
              />
            </div>
            <div>
              <button type="button" onClick={(e) => saveEmpresa(e)} className="btn btn-outline-primary mx-auto col-mx "> Salvar   </button>
              <Link type="button" className="btn btn-outline-primary mx-auto col-mx ml-2" to={"/lista"} > Lista de Empresas  </Link>
              
              
    
     
            </div>
            </form>
          <hr />
        </div>
      );
}
    export default EmpresaSave;