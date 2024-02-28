const bcrypt = require('bcrypt');
const User = require('../models/User');

const register = async (req, res) => {
    const {fullName, email, password} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                message: "User Already Registered"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            fullName,
            email,
            password: hashedPassword
        })
        await User.create(newUser);
        res.status(201).json({
            message: "User Registered Successfully",
            newUser
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const login = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            message: "Please enter email & password"
        })
    }
    try {
        const existingUser = await User.findOne({email});
        if(!existingUser){
            return res.status(404).json({
                message: "User Not Found"
            })
        }
        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if(!matchPassword){
            return res.status(400).json({
                message: "Password is Incorrect, Please try again"
            })
        }
        res.status(201).json({
            message: "User Logged In Successfully",
            data: existingUser
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

module.exports = {
    register,
    login
}