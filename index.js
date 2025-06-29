const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());


const data = [
    {
        id:1,
        name: 'Bassam Ali',
    email: 'syedbassam@gmail.com'
    },
    {
        id:2,
        name: 'Ali',
    email: 'ali@gmail.com'
    },
    {
        id: 3,
        name:'John Smith',
        email: 'john@gmail.com'
    },
]
//Basic route
app.get('/user/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const user = data.find(user=>user.id===id);

    if(user){
    res.json({user});
    }
    else{
        res.status(404).json({message:'User not found'});
    }
});
app.get('/user',(req,res)=>{
    res.json({
        user:data,
    });
});
app.get('/',(req,res)=> {
    
    res.json({
        message:'Welcome to ITM Full Stack Backend API',
        status:'Server is running successfully!',
        timestamp: new Date()
    });
});

//Health check route
app.listen(PORT, ()=> {
    console.log('Server running on port', PORT);
});
