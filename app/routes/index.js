const express =require ('express');

const app =  express();
const bodyParser = require ('body-parser');
const helmet = require ('helmet');
const cors = require ('cors');
const morgan = require ('morgan');
// const logger = require ('../config/logger')


// app.use(morgan("combined", { stream: logger.stream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(helmet())




app.get("/", (req, res) => {
    const welcomeText =
      "<div style='text-align: center;'><h1>Welcome to PentHomes Realestate Ecommerce .</h1><p>Server is up and running, visit <a href='https://github.com/SamsonIbrahim/PentHomes-Ecommerce'>link</a> for more info.</p></div>";
    res.status(200).send(welcomeText);
  });
  


module.exports = app;