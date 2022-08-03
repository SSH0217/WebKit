const http = require('http');
const express = require('express');
const app = express();

app.set('port', 3000);

app.get('/', (req, res) => {
    res.end('<h1>Welcome!</h1>');
})


const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log('listening on : http://localhost:' + app.get('port'));
})