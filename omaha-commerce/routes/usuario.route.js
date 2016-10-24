module.exports = app => {

    const Usuario = app.model.usuario.usuario;

    app.post("/usuario/salvar", (req, res) => {

        console.log(req.body);

        Usuario.create(req.body).then(function(user) {
            console.log("Usuário Salvo com sucesso!");
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

        console.log(req.body);

        res.json(req.body);

    });

    app.get("/usuario/consultarPorId", (req, res) => {

        console.log(req.body);

        res.json(req.body);

    });

};
