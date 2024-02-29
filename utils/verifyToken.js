const jwt  = require('jsonwebtoken');

const verifyToken = async (req, res) => {
    const headerToken = req.headers.authorization;
    if(!headerToken){
        return res.json({
            msg: "Please provide Token",
        })
    }
    try {
        const token = headerToken.split(' ')[1];
        const decoded = jwt.verify(token, process.env.SECRETE_KEY);
        return decoded;
    } catch (error) {
        return res.json({
            msg: "Invalid Token or Expired Token"
        }) 
    }
}
module.exports = verifyToken;