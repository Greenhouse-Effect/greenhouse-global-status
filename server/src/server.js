import express from 'express';

import applyMiddleware from './middleware/index.js';
import applyRoutes from './routes/index.js';

const server = express();

applyMiddleware(server);
applyRoutes(server);

export default server;
