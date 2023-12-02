import { useState } from "react";
import data from "./data";
import { FaAngleLeft, FaAngleRight, FaQuoteRight } from "react-icons/fa6";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  const checkNumber = (number) => {
    if (number < 0) {
      return data.length - 1;
    }
    if (number > data.length - 1) {
      return 0;
    }
    return number;
  };

  const cycleReviewBack = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;

      return checkNumber(newIndex);
    });
  };
  const cycleReviewForward = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;

      return checkNumber(newIndex);
    });
  };
  const randomReview = () => {
    setIndex(Math.floor(Math.random() * data.length));
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img className="person-img" src={image} alt={name} />
          <i className="quote-icon">
            <FaQuoteRight />
          </i>
        </div>
        <div>
          <h2 className="author">{name}</h2>
          <h5 className="job">{job}</h5>
          <p className="info">{text}</p>
        </div>
        <div className="btn-container">
          <button type="button" className="prev-btn" onClick={cycleReviewBack}>
            <FaAngleLeft />
          </button>
          <button
            type="button"
            className="next-btn"
            onClick={cycleReviewForward}
          >
            <FaAngleRight />
          </button>
        </div>
        <button type="button" className="btn" onClick={randomReview}>
          Surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
