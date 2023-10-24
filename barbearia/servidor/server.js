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
  numero TEXT,
  data TEXT
)`);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/agendamentos', (req, res) => {
  db.all(`SELECT * FROM agendamentos ORDER BY data, horario`, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Erro ao buscar agendamentos');
    } else {
      res.json(rows);
    }
  });
});

app.post('/agendamento', express.json(), (req, res) => {
  const { nome, horario, numero, servico, data } = req.body;

  db.get(`SELECT COUNT(*) as count FROM agendamentos WHERE horario = ? AND data = ?`, [horario, data], (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Erro ao verificar horário');
    } else {
      const count = row.count;
      if (count > 0) {
        res.status(400).send('Horário já está ocupado para esta data.');
      } else {
        db.run(`INSERT INTO agendamentos (nome, horario, numero, servico, data) VALUES (?, ?, ?, ?, ?)`, [nome, horario, numero, servico, data], (err) => {
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

// Rota para verificar a disponibilidade de horário
app.get('/verificarHorarioOcupado', (req, res) => {
  const { data, horario } = req.query;

  db.get(`SELECT COUNT(*) as count FROM agendamentos WHERE horario = ? AND data = ?`, [horario, data], (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ ocupado: false }); // Assume que não está ocupado em caso de erro
    } else {
      const count = row.count;
      if (count > 0) {
        res.json({ ocupado: true }); // Está ocupado
      } else {
        res.json({ ocupado: false }); // Não está ocupado
      }
    }
  });
});




// Rota para excluir um agendamento pelo ID
app.delete('/excluir-agendamento/:id', (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM agendamentos WHERE id = ?', [id], (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Erro ao excluir o agendamento');
    } else {
      res.send('Agendamento excluído com sucesso');
    }
  });
});






app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});