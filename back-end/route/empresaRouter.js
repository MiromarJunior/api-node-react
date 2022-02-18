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

// Busca por ID

router.get("/listar/:id", async (req, res) => {
    const id = req.params.id;
  
    const empresa = await Empresa.findById({ _id: id });
    if (!empresa) {
      try {
        res.status(422).json({ message: "Empresa não encontrado" });
      } catch (error) {
        res.status(500).json({ error: error });
      }
    } else {
      res.status(200).json(empresa);
    }
  });

// update
router.put("/atualizar/:id", async (req, res) => {
    {_id : req.params.id}
  
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
        dataEmissao ,
        valorServico } = req.body;
  
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
      const updateEmpresa = await Empresa.updateOne({ _id: id }, empresa);
      if (updateEmpresa.matchedCount === 0) {
        res.status(422).json({ message: "Empresa não encontrado" });
      } else res.status(200).json(empresa);
    } catch (error) {
      res.status(500).json({ error: error });
      res.status(500).json("Erro ao Atualizar");
     
    }
  });


  router.delete("/deletar/:id", async (req, res) => {
    const id = req.params.id;
    const empresa = await Empresa.findById({ _id: id });
    if (!empresa) {
        res.status(422).json({ message: "Empresa não encontrada" });
      }else{
          try {
              await Empresa.deleteOne({_id : id})
              res.status(200).json({ message: "Empresa removida" });
              
          } catch (error) {
            
                res.status(500).json({ error: error });
                
          }
      }
});




module.exports = router;