const mongoose = require("mongoose");

const Empresa = mongoose.model("Empresa", {
    razaoSocial : String,
    cnpj : String,
    endereco : String,
    bairro : String,
    municipio : String,
    cep : String,
    telefone : String,
    descricaoServ : String 

});

module.exports  = Empresa;