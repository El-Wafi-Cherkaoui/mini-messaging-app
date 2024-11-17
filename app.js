const express = require('express')
const path = require('node:path')

const app = express()
const {index_router} = require('./routers/index_router')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}))

app.use('/', index_router)

app.listen(9900)

