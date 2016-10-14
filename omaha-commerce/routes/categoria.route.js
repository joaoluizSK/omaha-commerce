module.exports = app => {

    app.post("/categoria/salvar", (req, res) => {

        console.log(req.body);

    });

    app.put("/categoria/atualizar", (req, res) => {

        console.log(req.body);

        res.json(req.body);

    });

    app.delete("/categoria/remover", (req, res) => {

        console.log(req.body);

        res.json(req.body);

    });

    app.get("/categoria/consultarTodos", (req, res) => {

        console.log(req.body);

        res.json(req.body);

    });

    app.get("/categoria/consultarPorId", (req, res) => {

        console.log(req.body);

        res.json(req.body);

    });

};
