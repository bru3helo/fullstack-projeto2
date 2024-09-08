const redis = require("redis");

const redisClient = redis.createClient();

redisClient.on('error', (err) => console.log("Redis deu erro!", err));

(async () => {
    await redisClient.connect();
})();

module.exports = {

    redis_client (req, res, next) {
        req.redisClient = redisClient;  // Passa o cliente Redis para req
        next();
    }

};

/*const redis = require("redis")

module.exports = {

    async redis_client (req, res, next){

        const cliente = redis.createClient()
          
        cliente.on('error', (err) => console.log("Redis deu erro!", err))
        
        cliente.connect();

        next()

    }

}
*/