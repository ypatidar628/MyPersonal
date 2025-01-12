import express from 'express';
const app = express();

//express replace the node http code 
app.listen(8989, () => {
    console.log("Execute port 8989");
});
   