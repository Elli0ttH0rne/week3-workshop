var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use(express.static(__dirname + '/www'));

let server = http.listen(3000, function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server");
    console.log("Server listening on: " + host + " port: " + port);
});

const users = [
    { email: "email1@com.au", password: "123" },
    { email: "email2@com.au", password: "456" },
    { email: "email3@com.au", password: "789" }
];

app.get('/account', function(req, res){
    res.sendFile(__dirname + '/www/account.html');
});

app.get('/login', function(req, res){
    res.sendFile(__dirname + '/www/login.html');
});

app.post('/login', function(req, res) {

    if(!req.body){
        return res.sendStatus
    }

    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.json({ valid: true });
    } else {
        res.json({ valid: false });
    }
});
