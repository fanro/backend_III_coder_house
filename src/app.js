import express from 'express';
import { config } from './config/config.js';
import { conectarDB } from './config/db.js';
import { logger } from './middlewares/logger.js';
import mocksRouter from './routes/mocks.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use('/api/mocks', mocksRouter);
const PORT = config.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server on line en puerto ${PORT}`);
});

conectarDB(config.MONGO_URL, config.DB_NAME);

app.get('/', (req, res) => {
  res.send('Bienvenidos');
});
