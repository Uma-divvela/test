let express = require('express')
let config = require('./config/config')
var bodyParser = require('body-parser')
let app = express()
config()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/router',require('./routes/requestHandlers'))

let port = process.env.port || 3800
app.listen(port,()=>{console.log(`Listening to Port : ${port}`)})