import  express  from "express";
import Cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(Cors())
app.use(bodyParser.json())
app.get('/',(req,res) =>{
    res.send("Api v1.0")
})

app.listen(5000,() =>console.log("Api runnig on port 5000"))