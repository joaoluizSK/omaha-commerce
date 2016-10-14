module.exports = app => {

    app.post("/produto/salvar", (req, res) => {

        console.log(req.body);

    });

    app.put("/produto/atualizar", (req, res) => {

        console.log(req.body);

        res.json(req.body);

    });

    app.delete("/produto/remover", (req, res) => {

        console.log(req.body);

        res.json(req.body);

    });

    app.get("/produto/consultarTodos", (req, res) => {

        console.log(req.body);

        res.json(req.body);

    });

    app.get("/produto/consultarPorId", (req, res) => {

        console.log(req.body);

        res.json(req.body);

    });

};
