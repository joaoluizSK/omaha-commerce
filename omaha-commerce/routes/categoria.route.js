module.exports = app => {

    const Categoria = app.model.categoria.categoria;

    app.post("/categoria/salvar", (req, res) => {
      Categoria.create(req.body).then(function(data) {
        res.json(data);
      });
    });

    app.put("/categoria/atualizar", (req, res) => {
      Categoria.update(req.body,{where:{id:req.body.id}}).then(function(data) {
        res.json(data);
      });
    });

    app.delete("/categoria/remover/:id", (req, res) => {
      Categoria.destroy({where:{id:req.params.id}}).then(function(result) {
        res.json(result);
      }).catch(function(error) {
        res.status(412).json({msg: error.message});
      });
    });

    app.get("/categoria/consultarTodos", (req, res) => {
      Categoria.findAll({}).then(function(result) {
        res.json(result);
      }).catch(function(error) {
        res.status(412).json({msg: error.message});
      });
    });

    app.get("/categoria/consultarPorId/:id", (req, res) => {
      Categoria.findById(req.params.id).then(function(result) {
        res.json(result);
      }).catch(function(error) {
        res.status(412).json({msg: error.message});
      });
    });

};
