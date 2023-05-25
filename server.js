const Express = require('express');
const Cors = require('cors');
const db = require('./app/models/index');
const biodata = require('./app/controllers/biodata.controller');

const app = Express();
const port = process.env.PORT || 3300;

let corsOptions = {
  origin: `localhost:${port}`,
};

app.use(Cors(corsOptions));
app.use(Express.json());
app.use(
  Express.urlencoded({
    extended: true,
  })
);

db.sequelize
  .sync()
  .then(() => {
    console.log('synced db.');
  })
  .catch((err) => {
    console.log('failed to sync db: ', err.message);
  });

app.get('/', (req, res) => {
  biodata.findAll(req, res);
});

app.get('/:id', (req, res) => {
  biodata.findOne(req, res);
});

app.post('/', (req, res) => {
  biodata.create(req, res);
});

app.put('/:id', (req, res) => {
  biodata.update(req, res);
});

app.delete('/:id', (req, res) => {
  biodata.delete(req, res);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
