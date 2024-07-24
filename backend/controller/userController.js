import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import user from "../models/user.js";
import { generate } from "generate-password";
import product from "../models/product.js";




export async function signup(req,res){
    const {username,email, password} = req.body;
    try{
        const userexists = await user.findOne({email:email});
        if(userexists){
            throw Error("User with this email already exists")
        }
        else{

            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(password,salt)
    
            try{
                // console.log(hash);
                const newuser = await user.create({username:username,password:hash,email:email})
                console.log(newuser)
                res.status(200).json({'user':newuser});


            }catch(error){
                console.log(error)
                res.status(400).json({error:error.message});
            }
        }

    }catch(error){
        // console.log("yahan")
        // console.log(error)
        // console.log(error.message)
        res.status(400).json({error:error.message});
    }
    

}


export async function login(req,res){
    const {username, password} = req.body;
    try{

        const iscorrect = await user.findOne({username});
        if(!iscorrect){
            throw Error("Incorrect Username")
        }
        
        const match = await bcrypt.compare(password, iscorrect.password)
        if (!match) {
            throw Error('Incorrect password')
        }
        res.status(200).json({'user': iscorrect})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

export async function getuserdata(req,res){
    console.log("yahan")
    try{
        const newuser = await user.find({username:req.body.username})
        console.log(newuser)
        res.status(200).send(newuser)

    }catch(error){
        res.status(400).json({error:error.message})
    }

}

export async function getproductdata(req,res){
    console.log('here dawg')
    try{
        const productdata = await product.find({name : req.body.productname});
        console.log("this is the product data received", productdata);
        if(productdata){
            res.send(productdata);
        }
    }catch(error){
        console.log(error);
    }
}




