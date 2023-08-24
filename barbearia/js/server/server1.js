const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'barbershop'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados MySQL estabelecida.');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota raiz
app.get('/', (req, res) => {
  res.send('Bem-vindo à página inicial do sistema de agendamento.');
});

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

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
db.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      return;
    }
    console.log('Conexão com o banco de dados MySQL estabelecida.');
  });
  
  // Configurando o middleware express.static para servir arquivos estáticos
  app.use(express.static('C:\Users\isabella\Documents\GitHub\tcc\barbearia\index.html')); // Substitua 'public' pelo caminho da pasta dos seus arquivos estáticos
  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  
  // Rota raiz
  app.get('/', (req, res) => {
    res.send('Bem-vindo à página inicial do sistema de agendamento.');
  });
  
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
  
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });