import 'dotenv/config';
import express from 'express';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';



const PORT= process.env.PORT;
const app = express();
app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/subscription', subscriptionRouter);

app.get('/',(req,res)=>{
res.send("This is a subscription tracker api")
});

app.listen(PORT,()=>{
    console.log(`port is running on ${PORT}`);
});

export default app;