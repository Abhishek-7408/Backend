const express = require('express');
const port = 8000;

const app = express();

app.get('/profile',function(req,res){
    console.log(req);
    
    res.send('it is running or it!')
});


app.listen(port,function(err){
    if(err){
        console.log('error in the server,err');

    }
    else{
        console.log('yup server is running on port',port);
    }
});