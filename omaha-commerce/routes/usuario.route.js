module.exports = app => {

    const Usuario = app.model.usuario.usuario;

    app.post("/usuario/salvar", (req, res) => {

        Usuario.create(req.body).then(function(data) {
            console.log("Usuário Salvo com sucesso!");
            res.json(data);
        });

    });

    app.put("/usuario/atualizar", (req, res) => {

        console.log(req.body);

        res.json(req.body);

    });

    app.delete("/usuario/remover", (req, res) => {

        console.log(req.body);

        res.json(req.body);

    });

    app.get("/usuario/consultarTodos", (req, res) => {

        Usuario.findAll({}).then(function(result) {
          res.json(result);
        }).catch(function(error) {
          res.status(412).json({msg: error.message});
        });

    });

    app.get("/usuario/consultarPorId", (req, res) => {

        console.log(req.body);

        res.json(req.body);

    });

};
