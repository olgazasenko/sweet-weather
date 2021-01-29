const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

const router = require('./routes/routes');
router.routesConfig(app);

app.use(express.static('./', {index: 'index.html'})); 

app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port,() => {
  console.log(`Server running at port ${port}`);
});