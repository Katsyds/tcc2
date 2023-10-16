npm install express mongoose body-parser
*{
    margin: 0;
    padding: 0;
}
/* Estilos gerais */
body {
    background-color: #000 ;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    color: #fff;
}

header {
    background-color: #2a2a2a; /* Preto */
    color: #fff; /* Branco */
    padding: 10px 0;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #dcb45e; /* Marrom claro */
}

nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

nav ul li a {
    text-decoration: none;
    color: #fff;
    transition: color 0.3s;
}

nav ul li a:hover {
    color: #dcb45e;
}

/* Estilos para telas menores */
@media screen and (max-width: 767px) {
    header {
        justify-content: center; /* Centraliza os elementos no cabeçalho */
    }

    .logo {
        padding: 10px; /* Adiciona espaço interno para melhorar a aparência centralizada */
    }
    nav ul {
        display: none; /* Oculta o menu de navegação em telas menores */
    }
    

}

/* Hero section */

/* Estilos para telas maiores */
@media screen and (min-width: 768px) {
    /* Alinhe o conteúdo no centro da tela */
    #hero {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: linear-gradient(to bottom, transparent, black), url('img/img1.jpg') center/cover no-repeat;
    }
    
    .content-container {
        max-width: 800px;
    }
}

/* Estilos para telas menores */
@media screen and (max-width: 767px) {
    /* Alinhe o conteúdo no centro da tela */
    #hero {
        text-align: center;
        padding: 100px 0;
        height: auto;
        background: linear-gradient(to bottom, transparent, black), url('img/img1.jpg') center/cover no-repeat;
    }
    
    .content-container {
        padding: 20px;
    }
    
    
    }



.hero-content {
    position: relative;
    z-index: 1;
}

.hero-content h1, .hero-content p {
    font-size: 3rem;
    margin-bottom: 20px;
    color: white;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 30px;
}

.btn {
    display: inline-block;
    background-color: #2a2a2a;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #444;
}


/* Services section */
.services-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    text-align: center;
}

.services-list li {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    font-size: 1.1rem;
}

.service-icon {
    margin-right: 10px;
    font-size: 1.3rem;
    color: #dcb45e;
}

/* Image gallery */
.image-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
    margin-top: 30px;
}

.image-gallery img {
    width: 100%;
    height: auto;
    border-radius: 5px;
}

/* Testimonials section */
.testimonial {
    background-color: #3a3a3a;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.testimonial blockquote {
    font-style: italic;
    margin-bottom: 10px;
    color: #ccc;
}

/* Contact section */
.content-block {
    max-width: 800px;
    margin: 0 auto;
    padding: 50px 20px;
    background-color: #2a2a2a;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-bottom: 40px;
}

/* Estilizando o formulário de agendamento */
#reservation-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 30px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

#reservation-form h3 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: #dcb45e;
}

#reservation-form label {
    display: block;
    margin-top: 15px;
    font-weight: bold;
    color: #fff;
}

#reservation-form input[type="text"],
#reservation-form input[type="tel"],

#reservation-form input[type="date"],
#reservation-form input[type="time"] {
    width: 95%;
    padding: 10px;
    margin-top: 5px;
    border: none;
    border-radius: 5px;
    background-color: #333;
    color: #fff;
}
#reservation-form select{
    width: 98%;
    padding: 10px;
    margin-top: 5px;
    border: none;
    border-radius: 5px;
    background-color: #333;
    color: #fff;
}

#reservation-form button {
    
    border: none;
    padding: 12px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s;
}

#reservation-form button:hover {
    /* background-color: #c4a245; */
    color: #000;
}

/* Estilize o formulário para telas menores */
#reservation-form {
    padding: 20px;
}

#reservation-form h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

#reservation-form label {
    margin-top: 10px;
}

#reservation-form input[type="text"],
#reservation-form input[type="tel"],
#reservation-form select,
#reservation-form input[type="date"],
#reservation-form input[type="time"] {
    padding: 8px;
    margin-top: 5px;
}

#reservation-form button {
    padding: 10px 15px;
    margin-top: 15px;
}

/* Estilize os botões de horário */
.horario-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    
}

.horario-button {
    background-color: #c4a280; 
    color: #fff; 
    border: 1px solid #ccc; 
    padding: 5px 10px; 
    margin-right: 10px; 
    cursor: pointer; 
    transition: border-color 0.3s; /* Adicione uma transição suave para a borda */
}

/* Botões de horário disponível */
.horario-button.horario-disponivel {
    background-color: green; /* Cor de fundo verde para horários disponíveis */
    color: white; /* Texto em branco para melhor visibilidade */
}

/* Botões de horário ocupado */
.horario-button.horario-ocupado {
    background-color: red; /* Cor de fundo vermelha para horários ocupados */
    color: white; /* Texto em branco para melhor visibilidade */
}


/* Botões de horário passados */
.horario-button.horario-passado {
    background-color: red; /* Cor de fundo vermelha para horários passados */
    color: white; /* Texto em branco para melhor visibilidade */
}

/* Botões de horário selecionado */
.horario-button.horario-disponivel.selecionado {
    background-color: darkgreen; /* Cor de fundo verde escuro para horários selecionados */
    color: white; /* Texto em branco para melhor visibilidade */
}
.horario-button.horario-ocupado.selecionado {
    background-color: darkred; /* Cor de fundo vermelho escuro para horários selecionados */
    color: white; /* Texto em branco para melhor visibilidade */
}
.horario-button.horario-passado.selecionado {
    background-color: darkred; /* Cor de fundo vermelha para horários passados */
    color: white; /* Texto em branco para melhor visibilidade */
}


.horario-message {
    color: red;
    font-weight: bold;
    display: none; /* Inicialmente, oculte a mensagem */
}


/* Footer */
footer {
    background-color: #2a2a2a;
    color: #fff;
    text-align: center;
    padding: 20px 0;
    margin-top: 50px;
}
