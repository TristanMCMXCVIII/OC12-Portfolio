import React, {useState, useEffect} from 'react';

import './Carousel.scss';

const Carousel = ({children}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const count = React.Children.count(children);
  
    // Changez la slide vers l'index spécifié
    const changeSlide = (index) => setCurrentIndex(index % count);
    const nextSlide = () => changeSlide(currentIndex + 1);
    const prevSlide = () => changeSlide(currentIndex - 1 + count);
  
    useEffect(() => {
      const slideInterval = setInterval(nextSlide, 3000);
      return () => clearInterval(slideInterval); // nettoie le rendu à la fin de vie de ce composant (après 5s)
    }, [currentIndex]);
  
    return (
      <div className="carousel">
        <div className="carousel__container">
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child, {
                    className: `carousel__slide ${index === currentIndex ? 'active' : ''}`,
                    key: `carousel_slide${index}`
                }
            ))}
        </div>

        <div className="carousel__controls">
            <span className="control" onClick={prevSlide}>&#10094;</span>
            <div className="pagination">
                {Array.from({ length: count }, (_, index) => (
                <span
                    key={`dot${index}`}
                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => changeSlide(index)}
                ></span>
                ))}
            </div>
            <span className="control" onClick={nextSlide}>&#10095;</span>
        </div>
      </div>
    );
}

export default Carousel
