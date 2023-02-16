import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

/**
 *
 * @param server - Express server to use middleware on
 */
const applyMiddleware = (server) => {
  server.use(cors());
  server.use(express.json());
  server.use(bodyParser.urlencoded({ extended: true }));
};

export default applyMiddleware;
