require('dotenv').config();
import path from 'path';
import express from 'express';
const port = 8080;
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';

const app = express();
//MIDDLEWARE
app.use(cors());
app.use(compression());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//ROUTES
app.get('/api', (req, res) => {
   res.status(200).json({
      status: 'success',
      data: {
         name: 'template',
         version: '1.0.0',
      },
   });
});

app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

export default app;
