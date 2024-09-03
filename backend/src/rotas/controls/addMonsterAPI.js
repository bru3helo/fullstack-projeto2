const prismaClient = require("../../prisma/client.js")

//Criar url
function formatToUrl(name) {
    return name.toLowerCase().replace(/ /g, '-');
}
        
module.exports = {

    async newMonster({name, type, size, languages, alignment}){

        const url = formatToUrl(name)

        const findMonster = await prismaClient.monster.findFirst({
            where: {
                id: url
            }
        })

        //Retorna se já existir um monstro com esse nome
        if (findMonster){
            return {message: "Já existe um monstro com esse nome."}
        }

        const monster = await prismaClient.monster.create({
            data: {
                id: url,
                name: name,
                type: type,
                size: size,
                languages: languages,
                alignment: alignment
            }
        })

        return {
            message: "Monstro criado.",
            monster: monster
        }

    }

}