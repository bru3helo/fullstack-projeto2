const redis = require("redis")

module.exports = {clientRedis: async () => {   

    const clientRedis = redis.createClient()
    clientRedis.on('error', err => console.log("Error Redis Client") )

    await clientRedis.connect() 

    return clientRedis

}}