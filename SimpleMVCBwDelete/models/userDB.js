const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'assignDBuser',
  password: 'assignDBpass',
  database: 'assignDB',
  namedPlaceholders: true
});

function getUsers(callback) {
  const sql = 'SELECT * from users';
  connection.execute(sql, function (err, results, fields) {
    callback(results);
  }
  );
}

function deleteUser(userData, callback) {
  const valueArray = Object.values(userData);
  const sql = 'DELETE FROM users WHERE userID = ?';
  console.log(userData);
  connection.execute(sql, valueArray, function(err, results, fields) {
    callback(results);
    }
    );
}

function addUser(userData, callback) {
  const valueArray = Object.values(userData);
  const sql = 'INSERT INTO users (fname, lname, username, passwd) VALUES(?,?,?,?)';
  console.log(userData);
  connection.execute(sql, valueArray, function (err, results, fields) {
    callback(results);
  }
  );
}

module.exports = { getUsers, addUser, deleteUser };
