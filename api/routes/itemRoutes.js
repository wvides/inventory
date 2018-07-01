const logger = require('../server/logger');

function configure(app, controllers) {
  app.get('/create', (req, res) => {
    controllers.createItem((err) => {
      if (err) {
        res.statusCode = 500;
        return res.send(`An error ocurred while creating the item ${err}`);
      }
      return res.send('item created');
    });
  });

  app.get('/list', (req, res) => {
    controllers.getItems((err, items) => {
      logger.error(err);
      if (err) {
        res.statusCode = 500;
        return res.send(`An error ocurred while querying the item ${err}`);
      }
      return res.json(items);
    });
  });
}

module.exports = configure;
