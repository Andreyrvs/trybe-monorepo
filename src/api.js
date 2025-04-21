const express = require('express');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const controllers = require('./controllers');
const middlewares = require('./middlewares');

const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();

app.use(express.json());
app.use('/', swaggerUi.serve);
app.get('/', swaggerUi.setup(swaggerDocument));

app.get('/health', (_req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'Ok',
    timestamp: new Date(),
  };

  try {
    res.send(healthcheck);
} catch (error) {
    healthcheck.message = error;
    res.status(503).send();
}
});

app.post('/login', middlewares.body.isLoginValid, controllers.login.logIn);
app.post('/user', middlewares.user.validateUser, controllers.user.create);
app.get('/user', middlewares.auth, controllers.user.getAll);
app.get('/user/:id', middlewares.auth, controllers.user.getById);

app.post('/categories',
  middlewares.auth,
  middlewares.body.isCategoryValid,
  controllers.category.create);
app.get('/categories', middlewares.auth, controllers.category.getAll);

app.post('/post',
  middlewares.auth,
  middlewares.body.isPostValid,
  middlewares.body.isCategory,
  controllers.blogPost.create);

app.use(middlewares.error);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
