const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    try {
        const token = jwt.sign({id}, process.env.SECRETE_KEY, {expiresIn: '1h'});
        return token;

    } catch (error) {
        return "Error in Creating Token"
    }
}

module.exports = generateToken;