const router = require("express").Router();
const Empresa = require("../model/Empresa");


// criar post

router.post("/salvar", async (req, res) => {
        const { razaoSocial,
        cnpj,
        inscricaoMunicipal,
        endereco,
        logradouro,
        bairro,
        municipio,
        estado,
        cep,
        telefone,
        descricaoServ,
        dataEmissao,
        valorServico } = req.body;
    if (!razaoSocial || !cnpj) {
        res.status(500).json("Erro ao cadastrar");
    } else {
        const empresa = {
            razaoSocial,
            cnpj,
            inscricaoMunicipal,
            endereco,
            logradouro,
            bairro,
            municipio,
            estado,
            cep,
            telefone,
            descricaoServ,
            dataEmissao ,
            valorServico
        };
        try {
            await Empresa.create(empresa);
            res.status(201).json("Inserido com sucesso");
        } catch (error) {
            res.status(500).json({ error: error });

        }


    }





});


router.get("/listar", async (req, res) => {
    try {
        const empresa = await Empresa.find();
        res.status(200).json(empresa);

    } catch (error) {
        console.error(error);
    }
})

module.exports = router;