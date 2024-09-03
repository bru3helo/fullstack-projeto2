const prismaClient = require("../../prisma/client.js")

//Criar url
function formatToUrl(name) {
    return name.toLowerCase().replace(/ /g, '-');
}

//Caso já tenha um monstro de mesmo nome, adiciona-se um sufixo
async function getUniqueName(baseName) {
    let uniqueName = baseName;
    let suffix = Math.floor(100 + Math.random() * 900);

    while (await nameExists(uniqueName)) {
        suffix = getRandomSuffix();
        uniqueName = `${baseName}-${suffix}`;
    }

    return uniqueName;
}

//Resgata o monstro, se houver
async function nameExists(name) {
    const count = await prismaClient.monster.count({
        where: { name: name }
    });
    return count > 0;
}

module.exports = {

    async newMonster({name, type, size, languages, alignment}){

        let url = formatToUrl(name)
        const newUrl = await getUniqueName(url)
        console.log(url)
        console.log(newUrl)

        const monster = await prismaClient.monster.create({
            data: {
                id: newUrl,
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