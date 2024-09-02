require("dotenv").config()
const {verify} = require('jsonwebtoken')

module.exports = {

    authenticate(req, res, next){

        console.log(req.cookies);
        const authToken = req.cookies.authToken;
        console.log('Auth Token:', authToken);

        if (!authToken){
            return res.status(401).json({message: "Token invalido"})
        } 

        const verified = verify(authToken, process.env.JWT_SECRET)

        if (verified){

            return next()

        } else{

            return res.status(401).json({message: "Token invalido"})
            
        }
    }
}
