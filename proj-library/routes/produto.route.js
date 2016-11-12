module.exports = app => {

  const Produto = app.model.produto.produto;

  app.post("/produto/salvar", (req, res) => {
    Produto.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  app.put("/produto/atualizar", (req, res) => {
    Produto.update(req.body,{where:{id:req.body.id}}).then(function(data) {
      res.json(data);
    });
  });

  app.delete("/produto/remover/:id", (req, res) => {
    Produto.destroy({where:{id:req.params.id}}).then(function(result) {
      res.json(result);
    }).catch(function(error) {
      res.status(412).json({msg: error.message});
    });
  });

  app.get("/produto/consultarTodos", (req, res) => {
    Produto.findAll({}).then(function(result) {
      res.json(result);
    }).catch(function(error) {
      res.status(412).json({msg: error.message});
    });
  });

};
