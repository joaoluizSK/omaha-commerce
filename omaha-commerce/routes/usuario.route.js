module.exports = app => {

  app.post("/usuario/salvar", (req, res) => {

    console.log(req.body);

    res.json(req.body);

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
