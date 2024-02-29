const User = require("../models/User")

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            message: "User Fetched Successfully",
            data: {
                users
            }
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const getUserById = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({
                message: "No User found"
            })
        }
        res.status(200).json({
            message: "User Fetched Successfully",
            data: {
                user
            }
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const updateUser = async (req, res) => {
    const {id} = req.params;
    const {fullName, email} = req.body;
    try {
        const user = await User.findByIdAndUpdate(id, {fullName, email}, {new: true});
        if(!user){
            return res.status(404).json({
                message: "No User found"
            })
        }
        await user.save();
        res.status(200).json({
            message: "User Updated Successfully Successfully",
            data: {
                user
            }
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUser
}