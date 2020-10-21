const express = require('express')
const app = express()
const bodyParser = require('body-parser')
    //配置文件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
    //解决跨域问题
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    next();
});

const db = require('./model/db')
    // app.use(express.static('static'));
    // app.get('/', (req, res) => {
    //     res.sendFile('/index.html');
    // })
app.post('/login', require('./api/user/login')) //登录


app.post('/changepsd', require('./api/user/changepsd')) //修改密码





app.listen(3000, () => {
    console.log(`服务已开启`)
})