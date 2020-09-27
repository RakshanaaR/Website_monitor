const https = require('https');
const express = require('express');
var bodyParser = require("body-parser"); 
const app = express();
const port = 8080;
var dns = require('dns');
const mongoose = require('mongoose')
const ping = require('./models/ping');
const{MONGOURI}=require('./key.js')
// console.log("entered");
mongoose.connect(MONGOURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true,
})
mongoose.connection.on("connected",()=>{
  console.log("connected");
})
mongoose.connection.on("error",()=>{
  console.log("error");
})
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.get('/', async (req, res) => {
    // const ping = await pingschema.find();
    res.render("index")
})
app.post('/ping', async (req, res) => {
    await ping.create({ Site: req.body.fullUrl })
    res.redirect('/')
  })
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  

// const iplocate = require('node-iplocate');
// var website = "https://beyondx.in/";
// var hostName = "www.beyondx.in";
// function statusCodes(web) {
//     return new Promise(resolve => {
//       https.get(web, res => resolve(res.statusCode));
//     });
//   }

//   async function getSatusPromise() {
//     return await statusCodes( website); 
//   }

//   function ipAddress(host){
//       return new Promise(resolve=>{
//         dns.lookup(host,  (err,address ,res)=>{
//             resolve(address);
//         })
//       })
//   }

//   async function getipAddress() {
//     return await ipAddress(hostName); 
//   }


//   async function getStatus() {
//       try {
//         var response = await getSatusPromise();
//         var ip = await getipAddress();
//         // await console.log(ip);
//         const geo = await iplocate(ip).then(res=>{
//             // console.log(res);
//             return res.country;
//         });
//         return "Server is alive with status code "+response+" from "+geo+" IP: "+ip;
//       } catch (error) {
//           console.log(error)
//       }
//   }
 
//   app.get('/', async (req, res) => {
//     var status = getStatus().then(res=>{
//         return res;
//     }).catch(err=>{
//         console.log(err);
//     });
//     console.log(status);
//     // res.JSON(status);
//     res.json({ status: status});
//   })
  
  