const express = require("express");

const app = express();

//app settings
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const port = 9091;

/*
*getting information from:
*AfricasTalking API
*/
app.post('/', (req,res)=>{
    console.log(req.body); 
   const {
        sessionId,
        serviceCode,
        phoneNumber,
        text,
    } = req.body;
let response;
if(text ===''){
  response = 'CON Buy airtime for \n 1. My Number \n 2. Other Number';
  let newTextArray = text.split("*");
  console.log(newTextArray);
}else if(text ==='1'){
  let userPnoneNumber = phoneNumber;
  console.log(userPnoneNumber)
  response = 'CON Amount to spend on airtime';
}else if(text ==='2'){
  response = 'CON Phone number to receive airtime';
  console.log(text)
}else{
  response = 'END Invalid option!'
}



  
setTimeout(()=>{
  console.log(text);
  res.send(response);
  res.end();
},2000); 
});
app.get('/', (req,res)=>{
  res.status(200).send({success: "return root file"});
})
app.listen(port, ()=>{
  console.log(`Server running on port ${port}`)
});