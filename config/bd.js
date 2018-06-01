/*var connection ={
    host: 'localhost',
    user: 'root',
    password: '',
    database : 'devstore',
};*/
const { Pool } = require('pg');
const pool= new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});

module.exports=pool;