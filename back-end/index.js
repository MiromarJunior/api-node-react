require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());
app.use((req, res, next) =>{
  //console.log("acessou o cors")
  
  res.header("Access-Control-Allow-Origin",'*');
  res.header("Access-Control-Allow-Methods", "*");
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', true);

  
  next();
})






  app.listen(port, function () {
    console.log('CORS-enabled web server listening on port 5000')
    
    

  })

app.use(express.urlencoded({
   extended : true,
}));


const empresaRouter = require("./route/empresaRouter");
app.use("/", empresaRouter);


const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
mongoose.connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.yh9xs.mongodb.net/nodedb?retryWrites=true&w=majority`
    )
.then(() => {
    console.log("Conectado ao banco");
    
   
  })
  .catch((error) => console.log(error));
