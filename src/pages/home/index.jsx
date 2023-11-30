import { FiHeart, FiUser } from "react-icons/fi";
import { BsBackpack } from "react-icons/bs";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUsers } from "../../api/users";
import ReviewCard from "../../components/review-card";
import ReviewCarrosel from "../../components/review-carrosel";

const Home = () => {
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    const response = await getUsers(1, 9);
    setReviews(response.data.results);
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <main>
      <section className="hero">
        <img src="./img/hero.png" alt="hero" />
      </section>
      <section className="about">
        <div className="w-4/12">
          <img src="./img/horizontal-logo.png" alt="logo" />
        </div>
        <div className="w-8/12">
          <p className="text-2xl">
            O projeto de apadrinhamento <strong>ALUMNI</strong> é uma iniciativa
            que visa apoiar estudantes que enfrentam dificuldades
            socioeconômicas a permanecerem na educação superior. O projeto é
            realizado por instituições de ensino superior, organizações sociais
            e voluntários.
          </p>
        </div>
      </section>
      <section className="home-section">
        <h3 className="text-3xl font-bold">Como funciona?</h3>
        <div className="cards">
          <div className="card">
            <span>
              <FiUser size={50} />
            </span>
            <div className="card-content">
              <h4>1. Faça seu cadastro como contribuinte</h4>
              <p>
                Nunc eu consectetur felis. Aliquam non pretium neque. Nunc
                tristique id justo a vulputate.
              </p>
            </div>
          </div>
          <div className="card">
            <span>
              <FiHeart size={50} />
            </span>
            <div className="card-content">
              <h4>2. Escolha como deseja ajudar</h4>
              <p>
                Vestibulum auctor iaculis ex vel finibus. Integer sit amet purus
                mi. Maecenas quis pellentesque dolor
              </p>
            </div>
          </div>
          <div className="card">
            <span>
              <BsBackpack size={50} />
            </span>
            <div className="card-content">
              <h4>3. Prontinho! Sua ajuda será alocada para um aluno(a).</h4>
              <p>Nulla et orci vel enim viverra vulpaaa</p>
            </div>
          </div>
        </div>
        <NavLink to="/register" className="b2-btn-layout mt-20">
          Quero fazer parte!
        </NavLink>
      </section>
      <section className="home-section">
        {reviews && <ReviewCarrosel reviews={reviews} />}
      </section>
      <section className="more-about">
        <img src="./img/home-bottom.png" alt="home-bottom" className="w-6/12" />
        <article className="text-2xl p-8 font-semibold w-6/12 h-96">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ad,
          autem, ut accusantium mollitia itaque saepe provident quis, cum
          aliquid voluptas voluptatibus. Voluptates ea odio eos id blanditiis
          ratione quis.
        </article>
      </section>
    </main>
  );
};

export default Home;
