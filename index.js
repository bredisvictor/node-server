var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname+'/up'));

app.get('/',function(request,response){
    
    response.send("ok");
});

var users = [
    {   
        id:1,
        name:"Alex",
        phone:"054353453",
    },
    {
        id:2,
        name:"Dana",
        phone:"567567567567",
    },
    {
        id:3,
        name:"Tomer",
        phone:"56547575756",
    },
    {
        id:4,
        name:"Mor",
        phone:"5464645645",
    },
];

//body parser 
app.use(bodyParser.json());
//Post mhettod
app.post("/list",function(req,res){
    var per = req.body;
    console.log(per);
    res.json(per);
    users.push(per);
});

app.get('/list/:id',function(request,response){
    var send;
    for(var i = 0; i< users.length; i++){
        if(users[i].id == request.params.id){
            send = users[i];
            break;
            
        }
        else{
            send = false;
            
            
        }
    }
    
    if(send != false){
        response.send('Requested user with id '+request.params.id+" Is "+users[i].name+" with phone number: "+users[i].phone);
    }
    else{
           response.send('Requested user with id '+request.params.id+" Is not exist");
        }
    
});

app.get('/about',function(request,response){
    //response.send("about");
    response.sendFile(__dirname+ "/aboutus.html");
});

app.listen(8080,function(){
    console.log('server started');
});

console.log('All is good');