const pool = require('../lib/client');

pool.query(`
  DROP TABLE IF EXISTS items;
  DROP TABLE IF EXISTS users;
`)
.then(
  () => console.log('drop tables complete'),
  err => console.log(err)
)
.then(() => {
  pool.end();
});
