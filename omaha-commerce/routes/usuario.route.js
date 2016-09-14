module.exports = app => {

  app.post("/usuario/salvar", (req, res) => {

    console.log(req.usuario);

    res.json(req.usuario);

  });

};
