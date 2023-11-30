import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUsers } from "../../api/users";
import "./style.css";
import SmallReviewCard from "../../components/small-review-card";

const Statement = () => {
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    const response = await getUsers(1, 4);
    setReviews(response.data.results);
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <main className="mb-32">
      <section className="statement-section">
        <div className="statement-section-info">
          <h3>O que os alunos dizem</h3>
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

        <div className="statement-image-content">
          <img src="/public/img/statement-1.png" alt="statement" />

          <div className="statement-img-textbox">
            <span className="blue-rectangle"></span>
            <p>
              Lorem ipsum dolor sit amet consectetur. Dis nunc sodales ultricies
              nibh amet tellus ac pretium. Euismod erat hendrerit elementum elit
              iaculis faucibus vitae odio.
            </p>
            <h6>Ana Carolina</h6>
          </div>
        </div>
      </section>
      <section className="statement-section-2">
        <img src="/public/img/statement-2.png" alt="statement" />
        <div className="flex flex-col justify-between space-y-9 w-full review-card-container ">
          {reviews.map((review, index) => (
            <SmallReviewCard key={index} review={review} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Statement;
