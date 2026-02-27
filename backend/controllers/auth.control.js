const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async(req,res)=>{
    const {userName,email,password} = req.body;

    const userExist = await User.findOne({email});
    if(userExist)return res.status(400).json({message:'User already exist'});

    const hashedPassword = await bcrypt.hash(password,0)

    const user = await User.create({
        userName,
        email,
        password:hashedPassword, 
    });
    return res.status(201).json({
        message: "User registered successfully",
        user: {
          id: user._id,
          userName: user.userName,
          email: user.email,
        },
      });
}
const loginUser = async(req,res)=>{
    const {email ,password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(400).json({message:'User not found'});
    const match = await bcrypt.compare(password,user.password);
    if(!match) return res.status(400).json({message:'Invalid credentials'});

    const token = jwt.sign(
        {id: user._id},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )
    return res.status(200).json({
        message: "Login successful",
        token,
        user: {
          id: user._id,
          userName: user.userName,
          email: user.email,
        },
      });
    
}

module.exports = {registerUser,loginUser};