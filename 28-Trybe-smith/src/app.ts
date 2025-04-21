import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import ProductRoutes from './routes/productRoutes';
import UserRoutes from './routes/userRoutes';
import OrderRoutes from './routes/ordersRouter';

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
  } catch (error: any) {
    healthcheck.message = error;
    res.status(503).send();
  }
});

console.log('Inicio#');
app.use('/products', ProductRoutes);
app.use('/users', UserRoutes);
app.use('/orders', OrderRoutes);

export default app;
