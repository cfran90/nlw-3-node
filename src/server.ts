import express from 'express';
import 'express-async-errors';
import path from "path";
import cors from "cors";

import errorHandler from "./errors/handler";
import routes from './routes';

import "./database/connection";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);


// query params: /users/?search=cesar
// route params: /users/1

// '/user/:id', (request, response) => {
//     request.query
//     request.param
//     request.body
// }

