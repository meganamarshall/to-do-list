require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const pool = require('./lib/client');

const ensureAuth = require('./lib/auth/ensure-auth');
const createAuthRoutes = require('./lib/auth/create-auth-routes');
const authRoutes = createAuthRoutes({
  selectUser(email) {
    return pool.query(`
      SELECT id, email, hash, display_name as "displayName"
      FROM users
      WHERE email = $1;
    `,
    [email]
    ).then(result => result.rows[0]);
  },
  insertUser(user) {
    return pool.query(`
      INSERT into users (email, hash, display_name)
      VALUES($1 $2 $3)
      RETURNING id, email, display_name as "displayName";
    `,
    [user.email, hash, user.displayName]
    ).then(result => result.rows[0]);
  }

})
const app = express();
const PORT = process.env.PORT;

app.use(morgan('dev'));
app.use(cors());

app.use(express.static('public'));
app.use(express.json());

const server = app.listen(PORT, () => console.log(`listening on port ${PORT}`));

module.exports = server;

