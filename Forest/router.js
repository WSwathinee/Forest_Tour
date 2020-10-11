//Run node of Customer
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'forest_tour'
});

//get data from table
const app = express();
app.get('/staff', function (req, res) {
    connection.getConnection(function (err, connection) {

    connection.query('SELECT * FROM staff', function (error, results, fields) {
     
      if (error) throw error;
      res.send(results)
    });
  });
});

app.listen(3000, () => {
 console.log('Go to http://localhost:3000/staff so you can see the data.');
});
