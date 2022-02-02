import express from 'express';

const app = express();
app.use('/', Router)

const Port = 8080;

app.listen(Port , (req,res)=>{
    console.log(`server is connected at Port ${Port}`);
})