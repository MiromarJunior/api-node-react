import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import empresaService from "../services/EmpresaService";
import "bootstrap/dist/css/bootstrap.min.css";


const EmpresaSave = () => {
  const [razaoSocial, setRazaoSocial] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [inscricaoMunicipal, setInscricaoMunicipal] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");
  const [telefone, setTelefone] = useState("");
  const [descricaoServ, setDescricaoServ] = useState("");
  const [dataEmissao, setDataEmissao] = useState("");
  const [valorServico, setValorServico] = useState("");
  const { _id } = useParams();



  const saveEmpresa = () => {

    const empresas = {
      razaoSocial,
      cnpj,
      inscricaoMunicipal,
      endereco: {
        logradouro,
        bairro,
        municipio,
        estado,
        cep
      }
      ,
      telefone,
      descricaoServ,
      dataEmissao,
      valorServico

    };
    if (_id) {
      empresaService
        .update(empresas)
        .then((response) => {
          console.log("Empresa atualizada com sucesso !!");
          window.location("/listar");
        })
        .catch((error) => {
          console.log("Erro ao Atualizar!!!", error);

          alert("Erro ao cadastrar!!");
        });

    } else {
      empresaService.create(empresas)
        .then((response) => {
          console.log("Empresa cadastrada com sucesso!!", response.data);
          alert("Empresa cadastrada com sucesso!!");
          window.location = "/listar";
        })
        .catch((error) => {
          console.log("Erro ao cadastrar", error);

          alert("Erro ao cadastrar!!");
        });

    }
  }

  useEffect(() => {
    if (_id) {
      empresaService.getId(_id)
        .then(empresa => {
          setRazaoSocial(empresa.data.razaoSocial);
          setCnpj(empresa.data.cnpj);
          setInscricaoMunicipal(empresa.data.inscricaoMunicipal);
          setLogradouro(empresa.data.logradouro);
          setBairro(empresa.data.bairro);
          setMunicipio(empresa.data.municipio);
          setEstado(empresa.data.estado);
          setCep(empresa.data.cep);
          setTelefone(empresa.data.telefone);
          setDescricaoServ(empresa.data.descricaoServ);
          setDataEmissao(empresa.data.dataEmissao);
          setValorServico(empresa.data.valorServico);



        })
    }
  }, [_id])
  return (



    <div className="container">
      <h3>Cadastrar Clientes</h3>
      <hr />


      <form>

        <div className="col-md-8">
          <label className="form-label" >CNPJ </label>
          <input
            type="text"
            className="form-control"
            id="cnpj"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            required
          />


        </div>

        <div className="col-md-8">


          <label className="form-label" >Razão Social </label>
          <input
            type="text"
            className="form-control"
            id="nome"
            value={razaoSocial}
            onChange={(e) => setRazaoSocial(e.target.value)}

          />
        </div>
        <div className="col-md-4">

          <label className="form-label" >INSCRICAO MUNICIPAL </label>
          <input
            type="text"
            className="form-control"
            id="inscricao"
            value={inscricaoMunicipal}
            onChange={(e) => setInscricaoMunicipal(e.target.value)}

          />
        </div>


        <div className="col-md-8">
          <label>LOGRADOURO </label>
          <input
            type="text"
            className="form-control col-4"
            id="logradouro"
            value={logradouro}
            onChange={(e) => setLogradouro(e.target.value)}

            required
          />
        </div>

        <div className="col-md-8">
          <label>BAIRRO </label>
          <input
            type="text"
            className="form-control col-4"
            id="bairro"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}

            required
          />
        </div>
        <div className="col-md-4">
          <label>MUNICIPIO </label>
          <input
            type="text"
            className="form-control col-4"
            id="municipio"
            value={municipio}
            onChange={(e) => setMunicipio(e.target.value)}

            required
          />
        </div>
        <div className="col-md-4">
          <label>ESTADO </label>
          <input
            type="text"
            className="form-control col-4"
            id="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}

            required
          />
        </div>  
        <div className="col-md-4">
          <label>DESCRIÇÃO DE SERVIÇOS </label>
          <input
            type="text"
            className="form-control col-4"
            id="descricaoServ"
            value={descricaoServ}
            onChange={(e) => setDescricaoServ(e.target.value)}

            required
          />
        </div> 
        <div className="col-md-4">
          <label>DATA DE EMISSAO </label>
          <input
            type="text"
            className="form-control col-4"
            id="dataEmissao"
            value={dataEmissao}
            onChange={(e) => setDataEmissao(e.target.value)}

            required
          />
        </div> 
        <div className="col-md-4">
          <label>VALOR DE SERVIÇOS </label>
          <input
            type="text"
            className="form-control col-4"
            id="valorDeServicos"
            value={valorServico}
            onChange={(e) => setValorServico(e.target.value)}

            required
          />
        </div> 


        <div className="col-md-2">
          <label>Telefone </label>
          <input
            type="text"
            className="form-control col-4"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}

            required
          />
        </div>

        <div className="col-md-2">
          <label className="form-label">CEP </label>
          <input
            type="text"
            className="form-control"
            id="cep"
            value={cep}
            onChange={(e) => setCep(e.target.value)}

            required
          />
        </div>

        <div>
          <button type="button" onClick={(e) => saveEmpresa(e)} className="btn btn-outline-primary mx-auto col-mx "> Salvar   </button>
          <Link type="button" className="btn btn-outline-primary mx-auto col-mx ml-2" to={"/listar"} > Lista de Empresas  </Link>




        </div>
      </form>
      <hr />
    </div>
  );
}
export default EmpresaSave;