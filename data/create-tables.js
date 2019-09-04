const pool = require('../lib/client');

pool.query(`
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(256) NOT NULL,
    hash VARCHAR(512) NOT NULL,
    display_name VARCHAR(256) NOT NULL
  );
  CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    task VARCHAR(512) NOT NULL UNIQUE,
    inactive BOOLEAN NOT NULL DEFAULT FALSE,
    user_id INTEGER NOT NULL REFERENCES users(id)
  );
`)
    .then(
      () => console.log('create tables complete'),
      err => console.log(err)
    )
    .then(() => {
      pool.end();
    })
