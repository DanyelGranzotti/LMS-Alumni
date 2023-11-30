import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ReviewCard from "../review-card";
import "./style.css";

const ReviewCarrosel = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <div className="review-carrosel overflow-hidden">
      <div className="flex justify-between items-center w-full mb-8">
        <h4 className="font-semibold text-3xl">Veja alguns relatos</h4>
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="carrosel-button"
            disabled={currentIndex === 0}
          >
            <FiArrowLeft size={30} />
          </button>
          <button
            onClick={nextSlide}
            className="carrosel-button"
            disabled={currentIndex === 2}
          >
            <FiArrowRight size={30} />
          </button>
        </div>
      </div>
      <div
        className="review-carrosel-content mb-10 space-x-4"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {reviews.map((review) => (
          <ReviewCard review={review} />
        ))}
      </div>
      <div className="flex w-full">
        <NavLink to="/statement" className="b2-btn-layout">
          Ver mais relatos
        </NavLink>
      </div>
    </div>
  );
};

export default ReviewCarrosel;
