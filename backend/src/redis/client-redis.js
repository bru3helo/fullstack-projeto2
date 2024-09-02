const redis = require("redis")

let clientRedis

//Redis
async () => {
    clientRedis = redis.createClient()
    clientRedis.on('error', err => console.log("Error Redis Client") )

    await clientRedis.connected()
}

module.exports = {clientRedis}