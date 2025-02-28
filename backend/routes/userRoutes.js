const express = require('express');

const mongoose = require("mongoose");
const User = require("../models/userModel");

const router = express.Router();
//Creating routes

//POST route-

router.post("/", async(req,res) => {
    try{
    const {name,email,age} = req.body;

    
    const userdata = await User.create({
        name: name,
        email:email,
        age:age,
    });

    res.status(201).json(userdata);

}catch(error){
    console.log(error);
    res.status(400).json({error:error.message});
}
});

//GET route

router.get("/",async (req,res) => {
    try{
        const showAll = await User.find();
        res.status(200).json(showAll);
    
    }catch(error){
        console.log(error);
        res.status(500).json({error:error.message});
    }
   
})

//get single user

router.get("/:id",async (req,res) => {

    const {id} = req.params;
    try{
        const singleUser = await User.findById({_id: id});
        res.status(200).json(singleUser);
    
    }catch(error){
        console.log(error);
        res.status(500).json({error:error.message});
    }
   
})

//delete operation

router.delete("/:id",async (req,res) => {

    const {id} = req.params;
    try{
        const singleUser = await User.findByIdAndDelete({_id: id});
        res.status(200).json(singleUser);
    
    }catch(error){
        console.log(error);
        res.status(500).json({error:error.message});
    }
   
})

//put operation

router.patch("/:id",async (req,res) => {

    const {id} = req.params;
    const {name,email,age} = req.body;
    try{
        const updateUser = await User.findByIdAndUpdate(id,req.body, {new:true,    
        });
        res.status(200).json(updateUser);
    
    }catch(error){
        console.log(error);
        res.status(500).json({error:error.message});
    }
   
})



module.exports = router;