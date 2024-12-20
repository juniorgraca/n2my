import React from "react";
import n2my from "/homeImg/n2my.svg";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <img src={n2my} alt="Nice 2 Meet You" className="logo" />
        <p className="subtitle">
          Conectamos tecnologia, criatividade e funcionalidade para dar vida às suas ideias.
        </p>
      </header>
      <main className="main">
        <p className="description">
          Seja bem-vindo! Somos especialistas em criar experiências digitais únicas, 
          combinando design sofisticado e soluções sob medida para destacar sua marca 
          no universo online. Transformamos sua visão em uma presença digital impactante.
        </p>
        <button className="button" onClick={() => alert("Agradecemos o interesse! Nossa equipe entrará em contato em breve.")}>
          Fale Conosco
        </button>
        <p className="subtitle">
          Espero voltar a ver você !
        </p>
      </main>
      <footer className="footer">
        <p className="footerText">© 2024 Nice 2 Meet You. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
