const redis = require("redis")

module.exports = {

    async redis_client (req, res, next){

        const cliente = redis.createClient()
          
        cliente.on('error', (err) => console.log("Redis deu erro!", err))
        
        cliente.connect();

        next()

    }

}