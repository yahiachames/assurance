import React , {useState} from 'react'
import "./Carousel.css"

function Carousel({data = [] , Component = () => <div></div>}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {data.map((el, index) => (
          <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
                <img src={el.image} alt={`Slide ${index}`} />
                <Component  product={el} index={index} />
          </div>
        ))}
      </div>
      <div className="navigation">
        <button className="prev" onClick={goToPrevSlide}>
          &lt;
        </button>
        <div className="dots">
          {data.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <button className="next" onClick={goToNextSlide}>
          &gt;
        </button>
          </div>
          
    </div>
  );

}

export default Carousel