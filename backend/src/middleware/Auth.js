require("dotenv").config()
const {verify, TokenExpiredError} = require('jsonwebtoken')

module.exports = {

    authenticate(req, res, next){

        console.log(req.cookies);
        const authToken = req.cookies.authToken;
        console.log('Auth Token:', authToken);

        if (!authToken){
            return res.status(401).json({message: "Token invalido"})
        } 

        try {
            const verified = verify(authToken, process.env.JWT_SECRET);

            if (verified) {

                req.user = verified.id

                return next();

            } else {

                return res.status(401).json({ message: "Token inválido" });
            }   
        } catch (err) {

            if (err instanceof TokenExpiredError) {
                
                return res.status(401).json({ message: "Token expirado" });
            }

            return res.status(401).json({ message: "Falha na autenticação" });
        }
    }
}
