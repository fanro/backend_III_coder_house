import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(3000, () => {
  console.log(`Server on line en puerto 3000`);
});

app.get('/', (req, res) => {
  res.send('Bienvenidos');
});
