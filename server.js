const express = require("express");
const app = express();
const path = require("path");
const customMiddelware= (req,res,next)=>{
let time = new Date().toTimeString();
    console.log(time);
      let day = new Date().getDay()
      console.log(day)
      let hours = new Date().getHours()
      console.log(hours)
      if (day>0 && day<6 && hours<17 && hours>9 )
      {next();}
      else { 
        res.sendFile(path.resolve("content","error.html"))}
}

app.use(express.static("public"));
app.use(express.static("image"));
app.use(customMiddelware);
app.get("/home", (req, res) => {
  res.sendFile(path.resolve("content", "index.html"));
});
app.get("/services",(req, res, next) => {
    res.sendFile(path.resolve("content", "services.html"));
  }
);
app.get("/contact", (req, res) => {
  res.sendFile(path.resolve("content", "contact.html"));
});
app.listen(5000, (err) => {
  if (err) throw err;
  console.log("sever is up and running");
});
