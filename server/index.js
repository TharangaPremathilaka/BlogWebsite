import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
//import Connection from './database/db.js';
import Router from './routes/route.js';
import mongoose from 'mongoose';



mongoose.connect("mongodb://oshani:oshwebsite2@blogwebsite-shard-00-00.tk1oa.mongodb.net:27017,blogwebsite-shard-00-01.tk1oa.mongodb.net:27017,blogwebsite-shard-00-02.tk1oa.mongodb.net:27017/Blog?ssl=true&replicaSet=atlas-t9982b-shard-0&authSource=admin&retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)



const app = express();
app.use(cors())
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',Router);
app.use(express.json());
app.use(express.urlencoded())


app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfully", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 


const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));


//Connection();