const express = require('express');
const app = express();

 app.use(express.json())

 app.use(express.urlencoded({extended: true}));
 
 const db = require('./models');
 db.mongoose
  .connect(db.url)
  .then(()=>{
    console.log("Database is connected!");
  })
  .catch((err)=>{
    console.log("Failed to connect Database!");
    process.exit();
  });

  // Sample entry point
  app.get("/",(req,res)=>{
    res.json({message:" Welcome to Ecom backend!"});
  });

  require("./routes/user.routes")(app);

  const PORT = process.env.PORT || 8080;

  app.listen(PORT,()=>{
    console.log("Server is running at port "+PORT)
  })




