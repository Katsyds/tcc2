const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 4002;

app.use(express.static('public'));
app.use(express.json());

const db = new sqlite3.Database('db.sqlite');

db.run(`CREATE TABLE IF NOT EXISTS agendamentos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  horario TEXT,
  servico TEXT,
  email TEXT,
  data TEXT
)`);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/agendamentos', (req, res) => {
  db.all(`SELECT * FROM agendamentos`, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Erro ao buscar agendamentos');
    } else {
      res.json(rows);
    }
  });
});

app.post('/agendamento', express.json(), (req, res) => {
  const { nome, horario, email, servico, data } = req.body;

  db.get(`SELECT COUNT(*) as count FROM agendamentos WHERE horario = ? AND data = ?`, [horario, data], (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Erro ao verificar horário');
    } else {
      const count = row.count;
      if (count > 0) {
        res.status(400).send('Horário já está ocupado para esta data.');
      } else {
        db.run(`INSERT INTO agendamentos (nome, horario, email, servico, data) VALUES (?, ?, ?, ?, ?)`, [nome, horario, email, servico, data], (err) => {
          if (err) {
            console.error(err.message);
            res.status(500).send('Erro ao agendar horário');
          } else {
            res.send('Horário agendado com sucesso');
          }
        });
      }
    }
  });
});

app.get('/gerenciamento', (req, res) => {
  res.sendFile(__dirname + '/public/gerenciamento.html');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
