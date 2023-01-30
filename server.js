
const express = require("express");
const app = express();


app.use(express.json());

const  nodemailer = require("nodemailer");
app.get("/",(req,res)=>{
    res.send("hello");
})
app.post("/signup",async(req,res)=>{

    //  Printing the body first(name and email)
    console.log(req.body);
  
       
        const  transporter = nodemailer.createTransport({
            service: 'gmail',
            post:465,
            host:"smtp.gmail.com",
            auth: {
                user: 'chaudharyabhi941@gmail.com',
                pass: 'apdamhmvswxospih'
            }
        });
    
        
    const mailOptions=()=>({
       
        from:"chaudharyabhi941@gmail.com",
        to:req.body.email,
        subject:"Thanks for Subscribing to Our Article Feed",
        text:"Dear "+ req.body.name+", Here is Your Java Book:",
        attachments:[
            {
                // For Java Book

                // filename:"CoreJava.pdf",
                // path:__dirname+"/CoreJava.pdf",

                // For Screenshot

                filename:"Java.png",
                path:__dirname+"/Java.png",

            }
        ]
    })
    

    transporter.sendMail(mailOptions(),function(error,info){
       
        if(error){
            console.log("error Occurse"+error);
            return;
        }else{
            console.log("email sent"+info.response);
        }
    })

    

    res.send("thankyou")
   
})





const SMTPConnection = require('nodemailer/lib/smtp-connection');

const { parseArgs } = require("util");
  
app.listen(4000,()=>{
    console.log("server is running at 4000")
})

