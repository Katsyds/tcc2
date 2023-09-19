const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 4002;

// Configuração do middleware para servir arquivos estáticos da pasta "public"
app.use(express.static('public'));
app.use(express.json()); // Parse JSON no corpo das solicitações

// Conectar ao banco de dados SQLite
const db = new sqlite3.Database('db.sqlite');

// Criar a tabela de agendamentos se ela não existir
db.run(`CREATE TABLE IF NOT EXISTS agendamentos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  horario TEXT,
  servico TEXT,
  email TEXT,
  data TEXT
)`);

// Rota raiz, serve o arquivo index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Rota para obter os agendamentos do banco de dados
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

// Rota para agendar um horário
app.post('/agendamento', express.json(), (req, res) => {
  const { nome, horario, email, servico, data } = req.body;

  // Verificar se o horário já está ocupado para a data especificada
  db.get(`SELECT COUNT(*) as count FROM agendamentos WHERE horario = ? AND data = ?`, [horario, data], (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Erro ao verificar horário');
    } else {
      const count = row.count;
      if (count > 0) {
        res.status(400).send('Horário já está ocupado para esta data.');
      } else {
        // Inserir o novo agendamento com data e hora
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

// Rota para acessar a página de gerenciamento
app.get('/gerenciamento', (req, res) => {
  res.sendFile(__dirname + '/public/gerenciamento.html');
});


// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
