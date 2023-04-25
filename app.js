const express = require('express');


const app = express();
const port = 4000;

app.get('/user/:name/:age/:sex', (req,res)=>{
    const {name,age,sex} = req.params;
    const userObject = {name,age,sex};
    res.json(userObject);
});

app.listen(port, ()=>{
    console.log('Listening on port: $(port)')
})

