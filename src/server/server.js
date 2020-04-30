// import apiRouter from './routes';
// const express = require('express');
// const bodyParser = require('body-parser')
// const path = require('path');
// const app = express();
// app.use(express.static(path.join(__dirname, 'build')));

// app.use(apiRouter);

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(process.env.PORT || 8080);

import * as path from 'path';
import * as express from 'express';
import apiRouter from './routes';

const app = express();

let p = path.join(__dirname, '../public');

app.use(express.static(p));
app.use(apiRouter)

const port = process.env.PORT || 3000
app.listen(port, () =>{
  console.log(`Server listening on port: ${port}`)
});