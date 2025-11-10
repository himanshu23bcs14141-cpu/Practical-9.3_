const express=require('express');
const app=express();
app.get('/api',(_,res)=>res.json({msg:'Hello from backend'}));
app.listen(5000,()=>console.log('Backend running'));
