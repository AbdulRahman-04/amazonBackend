import express from "express"
import config from "config"
import { Config } from "twilio/lib/twiml/VoiceResponse";

const app = express();

const PORT = config.get("PORT")

app.use(express.json());

app.get("/home", (req, res)=>{
    try {

        res.status(200).json({msg: "YOUR WEB APP HOME PAGE IS THIS  "})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
})

app.listen(PORT, ()=>{
    console.log(`YOUR SERVER IS RUNNING LIVE AT PORT ${PORT}`);
    
})