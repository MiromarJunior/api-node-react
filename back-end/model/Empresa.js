const Decimal = require("decimal");
const mongoose = require("mongoose");

const Emp = mongoose.model("Emp", {
    razaoSocial : String,
    cnpj : String,
    inscricaoMunicipal : String,
    endereco : {
        logradouro : String,
        bairro : String,
        municipio : String,
        estado : String,
        cep : String,
    },
    telefone : String,
    descricaoServ : String, 
    dataEmissao :String,
    valorServico : Decimal

});

module.exports  = Emp;