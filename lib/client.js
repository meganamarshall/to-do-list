require('dotenv').config();
const Pool = require('pg').Pool;

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: 'todos',
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

pool.on('connect', () => {
  console.log('connected');
});


pool.on('remove', () => {
  /*eslint-disable-next-line*/
  console.log('client removed');
  process.exit(0);
});

module.exports = pool;
