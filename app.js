import express from "express";
const app= express()
const port= process.env.port||5000
import database from './connectdb/connectdb.js'
import router from './routes/index.js'


// ejs
app.set('view engine','ejs')
//database connections
database()
//middlewear (req.body)
app.use(express.urlencoded({extended:false}))

//router use
app.use(router)
console.log('hello')


app.listen(port,()=>{
    console.log(`server listening on port ${port} `)
})