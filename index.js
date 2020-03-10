const express = require('express');

const server = express();

// Query params = ?teste=1
// return res.json({message: `Hello ${nome}`});
// localhost: 3000/teste/?nome=Bruno

// Route params = /users/1
/* server.get('/users/:id', (req, res) => {
  const {id} = req.params;
  return res.json({message: `Buscando o usuário ${id}`});
})
*/

// Request body = {"name": "Bruno", "email": "Bruno.avila.432@gmail.com"}

const users = ['Bruno', 'Amanda', 'Jorge'];

server.get('users/:index', (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

server.listen(3000);
