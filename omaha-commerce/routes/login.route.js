module.exports = app => {
  app.get("/logar", (req, res) => {
    res.json({
      nome : 'Wesley Fuchter'      
    });
  });
};
