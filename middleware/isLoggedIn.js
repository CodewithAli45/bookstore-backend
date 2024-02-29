const verifyToken = require("../utils/verifyToken");

const isLoggedIn = async (req, res, next) => {
    try {
        const decodedId = await verifyToken(req);
        req.authUser = decodedId.id;
        next();
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

module.exports = isLoggedIn; 