const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const { application } = require('express');
const bodyParser = require('body-parser');
//새로운 속성 추가
app.set('port', 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); //확장자


//미들웨어 추가
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//라우트 설정
let top = 1;
let carList = [
    {cno:top++, name:'SONATA', price:3500, company:'HYUNDAI', year:2019},
    {cno:top++, name:'GRANDURE', price:5500, company:'HYUNDAI', year:2020},
    {cno:top++, name:'BMW', price:5500, company:'BMW', year:2021},
    {cno:top++, name:'S80', price:6500, company:'VOLVO', year:2022}
];

app.get("/home", (req, res) => {
    req.app.render('home', {carList}, (err, data) => {
        if(err) throw err;
        res.end(data);
    });
});

// ejs 페이지로 forward
app.get("/input", (req, res) => {
    req.app.render('input', {carList}, (err, data) => {
        if(err) throw err;
        res.end(data);
    });
});
//input data 처리
app.post("/input", (req, res) => {
    let carData = {
        cno:top++, 
        name: req.body.name, 
        price: req.body.price, 
        company: req.body.company, 
        year: req.body.year
    }
    carList.push(carData);
    //res.send(carList);
    res.redirect('/home');
});

app.get("/detail/:cno", (req, res) => {
    let idx = carList.findIndex((item)=>{
        return item.cno == req.params.cno;
    });
    let data = carList[idx]
    req.app.render('detail', {data}, (err, htmlData) => {
        if(err) throw err;
        res.end(htmlData);
    });
});
app.post("/modify", (req, res) => {
    let carData = {
        cno: req.body.cno, 
        name: req.body.name, 
        price: req.body.price, 
        company: req.body.company, 
        year: req.body.year
    }
    let idx = carList.findIndex((item)=>{
        return item.cno == req.body.cno;
    });
    carList[idx] = carData;
    res.redirect('/home');
});

app.get("/modify/:cno", (req, res) => {
    let idx = carList.findIndex((item)=>{
        return item.cno == req.params.cno;
    });
    let data = carList[idx]
    req.app.render('modify', {data}, (err, htmlData) => {
        if(err) throw err;
        res.end(htmlData);
    });
});


app.get("/delete/:cno", (req, res) => {
    let idx = carList.findIndex((item)=>{
        return item.cno == req.params.cno;
    });
    carList.splice(idx, 1);
    res.redirect('/home');
});

const server = http.createServer(app);
server.listen(app.get('port'), (err, res) => {
    console.log('server listening on => http://localhost:3000');
});