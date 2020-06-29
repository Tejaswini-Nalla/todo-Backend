const env = require('./env.js.js');
const { Client } = require('pg');
const client = new Client({
    user: env.username,
    host: env.host,
    database: env.database,
    password: env.password,
    port: env.port
});
client.connect().then(res => console.log(res));
module.exports = client