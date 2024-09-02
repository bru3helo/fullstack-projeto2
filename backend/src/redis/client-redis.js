const redis = require("redis")

//Redis
const clientRedis = redis.createClient()
clientRedis.on('error', err => console.log("Error Redis Client") )

async () => {
    await clientRedis.connected()
}

module.exports = {clientRedis}