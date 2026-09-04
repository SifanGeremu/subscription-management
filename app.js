import 'dotenv/config';
import express from 'express';
const app = express();

app.get('/',(req,res)=>{
res.send("This is a subscription tracker api")
});

const PORT= process.env.PORT;

app.listen(PORT,()=>{
    console.log(`port is running on ${PORT}`);
});

export default app;