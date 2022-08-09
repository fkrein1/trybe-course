const express = require('express');
const Controllers = require('./controllers');

const app = express();
app.use(express.json());

app.get('/ping', Controllers.pong);
app.get('/cep/:cep', Controllers.getZip);

app.listen(3000, () => console.log('running'));
