import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUsers } from "../../api/users";
import "./style.css";
import SmallReviewCard from "../../components/small-review-card";

const About = () => {
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    const response = await getUsers(1, 4);
    setReviews(response.data.results);
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <main>
      <section className="about-section">
        <div className="flex flex-col justify-between w-1/2 space-y-12 ">
          <h3>Sobre o ALUMNI</h3>
          <p className="text-2xl">Lorem ipsum dolor sit amet consectetur.</p>
          <p className="text-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            nisi optio eligendi fugit debitis deleniti quasi repellat. Ipsam quo
            sequi voluptas, aperiam voluptatem enim vero fuga porro.
          </p>
          <p className="text-2xl">Lorem ipsum dolor sit amet consectetur.</p>
          <NavLink to="/register" className="b2-btn-layout w-fit">
            Seja um contribuinte
          </NavLink>
        </div>

        <div className="about-image-content">
          <img src="./img/about-1.png" alt="about-1" />
        </div>
      </section>
      <section className="about-section-2 ">
        <img src="./img/about-2.png" alt="about-2" />
      </section>
    </main>
  );
};

export default About;
