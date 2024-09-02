const prismaClient = require("../../prisma/client.js")
const {hash} = require("bcrypt")

module.exports = {

    async createNewUser({user, password}){
    
        const userExist = await prismaClient.user.findFirst({
            where: {
                user: user
            }
        })

        if (userExist) {
            return null
        }

        const passwordHash = await hash(password, 8)

        const createUser = await prismaClient.user.create({
            data: {
                user: user,
                password: passwordHash
            }
        })

        return createUser
    }

}