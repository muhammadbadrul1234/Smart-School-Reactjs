import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';



const FreeCourseCard = (props) => {
  const { imgUrl, title, students, rating } = props.item;
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // Redirect to the "/about" page
    navigate('/about');
  };
  return (
    <div>
    <div className="single__free__course">
      
      <Slider>
        <div>
          <div className="free__course__img mb-5">
            <img src={imgUrl} alt="" className="w-100" />
          </div>
          <div className="free__course__details">
            <h6>{title}</h6>
            <div className="d-flex align-items-center gap-5">
              <span className="d-flex align-items-center gap-2">
                <i className="ri-user-line"></i> {students}k
              </span>
              <span className="d-flex align-items-center gap-2">
                <i className="ri-star-fill"></i> {rating}k
              </span>
            </div>
          </div>
        </div>
        {/* Add more slides if needed */}
      </Slider>
      {/* Button at the end */}
    
    </div>
    {/* Button at the end */}

    </div>
   
    
  );
};

export default FreeCourseCard;

