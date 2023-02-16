import countryRoute from './countries.js' 

/**
 * 
 * @param server - Express server to use routes on
 */
const applyRoutes = (server) => {
  server.use("/api/country", countryRoute);
  server.get("/", (req, res) => {res.send("greenhouse-api running here")});
};

export default applyRoutes;
