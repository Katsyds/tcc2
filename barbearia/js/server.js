const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3306;

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'katsyds',
  password: '120701',
  database: 'barbershop'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados MySQL estabelecida.');
});

// ...

// Rota para agendar um horário
app.post('/appointments', async (req, res) => {
  try {
    const { name, email, service, date, time } = req.body;

    const sql = 'INSERT INTO appointments (name, email, service, date, time) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [name, email, service, date, time], (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Ocorreu um erro ao agendar o horário.' });
        return;
      }
      res.status(201).json({ message: 'Horário agendado com sucesso!' });
    });
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao agendar o horário.' });
  }
});

// ...

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
