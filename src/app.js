import express from 'express';
import { config } from './config/config.js';
import { conectarDB } from './config/db.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = config.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server on line en puerto ${PORT}`);
});

conectarDB(config.MONGO_URL, config.DB_NAME);

app.get('/', (req, res) => {
  res.send('Bienvenidos');
});
