const pool = require('../lib/client');
const list = require('./list');
const people = require('./user');


Promise.all(
   people.map(user => {
     return pool.query(`
      INSERT INTO users (email, hash, display_name)
      VALUES ($1, $2, $3)
      RETURNING *;
    `,
    [user.email, user.hash, user.displayName])
      .then(result => {
        return result.rows[0];
      })
   })
)
  .then(users => {
    return Promise.all(
      list.map(task => {
        return pool.query(`
        INSERT INTO items (task, user_id)
        VALUES ($1, $2);
        `,
        [task.task, users[0].id])
      })
  )
})
  .then(
    ()  => console.log('seed data load complete'),
    err => console.log(err)
  )
  .then(() => {
    pool.end();
  })
