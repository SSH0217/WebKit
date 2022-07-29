const http = require('http');
const express = require('express');
const { application } = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', function (req, res) {
    console.log("get / 요청받음");
    res.end("<h1>Hello world!</h1>");
});

app.get('/hello_ko', function (req, res) {
    console.log("get /hello_ko 요청받음");
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.write("<h1>길동이의 홈페이지</h1>");
    res.end();
});

app.get('/data', function(req, res) {
    console.log(">>> GET - /data 요청 받음 ...");
    // localhost:3000/data?user=KIM&message=HELLO
    let resData = {
        "user": req.query.user, 
        "message": req.query.message
    }
    // res.end() : 문자열 처리
    // res.send() : 객체 처리
    res.send(resData);
});

app.get("/calc/:num1/:num2/:oper", (req, res)=>{
    let num1 = Number(req.params.num1);
    let num2 = Number(req.params.num2);
    let resultValue = 0;
    switch(req.params.oper) {
    case "plus" : resultValue = num1 + num2; break;
    case "min" : resultValue = num1 - num2; break;
    case "mul" : resultValue = num1 * num2; break;
    case "div" : resultValue = num1 / num2; break;
    case "mod" : resultValue = num1 % num2; break;
    }
    res.send({resultValue});
});

app.get("/save/:title/:name/:content", (req, res)=>{
    console.log("입력하신 데이터는 다음과 같습니다.")
    console.log("제목: "+req.params.title);
    console.log("이름: "+req.params.name);
    console.log("내용: "+req.params.content);
});

const server = http.createServer(app);
server.listen(3000, function() {
    console.log('listening on port 3000, http://localhost:3000');
});