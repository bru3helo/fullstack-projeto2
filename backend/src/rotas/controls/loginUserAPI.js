require("dotenv").config()
const {sign} = require("jsonwebtoken")
const {compare} = require("bcrypt")
const prismaClient = require("../../prisma/client.js")

module.exports = {

    async loginUser({user, password}){

        const userExist = await prismaClient.user.findFirst({
            where: {
                user: user
            }
        })

        if (!userExist){
            return null
        }
         
        const password_ = userExist.password
        const comparePassword = await compare(password, password_)

        if (!comparePassword){
            return null
        }

        const token = sign({
            id: userExist.id
        },
            process.env.JWT_SECRET, {
            expiresIn: "10m"
        })

        console.log("Token criado:", token)

        return token

    }
}