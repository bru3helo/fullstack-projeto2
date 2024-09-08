const redis = require("redis");

const redisClient = redis.createClient();

redisClient.on('error', (err) => console.log("Redis deu erro!", err));

(async () => {
    await redisClient.connect();
})();

module.exports = redisClient;