module.exports = app => {

    const Usuario = app.model.usuario.usuario;

    app.post("/usuario/logar", (req, res) => {
      Usuario.findAll({where:{email:req.body.email, senha:req.body.senha}}).then(function(result) {
        res.json(result);
      }).catch(function(error) {
        res.status(412).json({msg: error.message});
      });
    });

    app.post("/usuario/salvar", (req, res) => {
      Usuario.create(req.body).then(function(data) {
        res.json(data);
      });
    });

    app.put("/usuario/atualizar", (req, res) => {
      Usuario.update(req.body,{where:{id:req.body.id}}).then(function(data) {
        res.json(data);
      });
    });

    app.delete("/usuario/remover/:id", (req, res) => {
      Usuario.destroy({where:{id:req.params.id}}).then(function(result) {
        res.json(result);
      }).catch(function(error) {
        res.status(412).json({msg: error.message});
      });
    });

    app.get("/usuario/consultarTodos", (req, res) => {
      Usuario.findAll({}).then(function(result) {
        res.json(result);
      }).catch(function(error) {
        res.status(412).json({msg: error.message});
      });
    });

    app.get("/usuario/consultarPorId/:id", (req, res) => {
      Usuario.findById(req.params.id).then(function(result) {
        res.json(result);
      }).catch(function(error) {
        res.status(412).json({msg: error.message});
      });
    });

};
