const express  = require("express")
// const browser = require("./browser")
// const teamBrowser = require("./test")
const teamBrowser = require("./teamBrowser")
const app = express()

app.use(express.json());
app.get('/',async (req,res)=>{
    res.send("server runnung")
})
app.get('/run',async ()=>{
    teamBrowser.newBrowser()
    res.send("requested")
})
// browser.newBrowser()
const port = process.env.PORT
app.listen(port,()=>{
    console.log("server is running on ",port);
})