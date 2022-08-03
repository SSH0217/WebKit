const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs');
//웹크롤링
const axios = require('axios');
const cheerio = require('cheerio');
// axios 한글 깨짐 해결 하는 모듈
const iconv = require('iconv-lite');


app.set('port', 3000);

app.get('/', (req, res) => {
    res.end('<h1>Welcome!</h1>');
});
//파일 읽기 쓰기
app.get('/fs_write', (req, res) => {
    // ?message = OOOO;
    let message = req.query.message;
    fs.writeFile('mynewFile3.txt', message, function (err) {
        if (err) throw err;
        console.log('Saved!');    
        //writeHead는 한개만
        //res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        //res.end('<h1>파일 쓰기 테스트</h1>');
        res.redirect('/fs_read')
    });
;
});

app.get('/fs_read', function(req, res) {
    fs.readFile('mynewFile3.txt', function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(data);
        return res.end();
    })
});
/////////////////////////////////////////////////////////////////////////////////////////
// 웹크롤링
const sleep = (ms) => {
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}
app.get('/axios', (req, res) => {
    // Promise - 콜백 헬에 빠지는것을 방지(흐름제어) - 메소드체인.then([콜백])
    // Async - 리스트 형식으로 한다. [콜백, 콜백, 콜백 ...]
    let getUrlVal = "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=100";
    axios.get(getUrlVal, {responseType:"arraybuffer"}).then(async(response) => {
        const htmlContent = response.data;
        let htmlCMD = iconv.decode(htmlContent,"EUC-KR").toString();
        // cheerio를 이용한 DOM셀렉터
        const $ = cheerio.load(htmlCMD);
        //#main_content > div > div._persist > div:nth-child(1) > div:nth-child(4) > div.cluster_body > ul > li:nth-child(1) > div.cluster_thumb > div > a > img
        let imgData = $('ul > li > div.cluster_thumb > div > a > img');
        for(var i=0, cnt=0; i<10; i++) {
            let imgUrl = imgData[i].attribs.src
            //console.log(imgUrl.split('?')[0]);
            let imgDataUrl = imgUrl.split('?')[0];
            //console.log(imgDataUrl);
            axios.get(imgDataUrl, {responseType: 'arraybuffer'}).then( (imgRes)=>{
                //console.log(imgRes.data);
                fs.writeFile("./download/"+cnt+".jpg", imgRes.data, (err, data1)=>{
                    console.log(">>> 다운로드 완료 " + cnt++);
                });
            });
            await sleep(100);
        }
    });
    res.end();
});
////////////////////////////////////////////////////////////////////////////////////////////


const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log('listening on : http://localhost:' + app.get('port'));
});