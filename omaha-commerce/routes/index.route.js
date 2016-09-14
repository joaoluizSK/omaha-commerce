module.exports = app => {

  app.get("/", (req, res) => {

    res.sendFile("static/index.html");

  });

};
