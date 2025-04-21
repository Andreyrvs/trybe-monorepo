import express from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import errorHandler from './middlewares/error';
import carRouter from './routes/Cars';

const app = express();
app.use(express.json());

const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/', swaggerUi.serve);
app.get('/', swaggerUi.setup(swaggerDocument));

app.use(carRouter);
app.use(errorHandler);
export default app;
