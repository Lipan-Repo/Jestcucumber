import express from 'express';
export const app=express();
app.use(express.json())
const port=3000;
app.get('/hi',(req,res)=>{
    res.send('hi i am lipan')
})
app.listen(port,()=>{
    console.log("server is running");
})