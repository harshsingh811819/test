import express from 'express';
import {userModel} from '../model/table.js'
const router = express.Router(); //express se router nikale hai.

router.post('/user-register',async(req, res)=>{
    const {name, email,password,contact,address} = req.body;
    const {profile} = req.files;
    profile.mv("uploads/"+profile?.name, (err) =>{
        if(err){
            res.send(err);
        }
    });

    const isExist = await userModel.findOne({email,password});

    if(isExist){
        res.send("User already exist")
    }else{
        const data = new userModel({
            name, email,password,contact,address,profile:profile?.name
        })
        const result = await data.save();
        res.send(result);
    }
})

router.post('/login',async(req,res)=>{
    try{
        const {email, password} = req.body;
    const  isLogin = await userModel.findOne({email,password});
    if(isLogin){
        res.json({
            code: 200,
            message: "User successfully Login",
            data:isLogin
        })
    }else{
        res.json({
            code: 400,
            message: "Invalid Credential",
            data:""
        })
    }
    }
    catch(err){
        res.json({
            code: 500,
            message: "Internal server error",
            data:""
        })
    }

})

export default router;