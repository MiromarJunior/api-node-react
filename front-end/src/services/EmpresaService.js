import httpClient from "../api";


const getAll = () => {
  return httpClient.get("/listar");
  
}

const getId = _id =>{
  return httpClient.get(`listar/${_id}`);
}

const create = data =>{
  return httpClient.post("/salvar",data);
}

const update = data =>{
  return httpClient.put('/atualizar',data);
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll, getId,create, update};