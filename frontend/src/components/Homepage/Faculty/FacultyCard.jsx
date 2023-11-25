import React from "react";

const FacultyCard = (props) => {
  const { imgUrl, title, lesson, students, rating } = props.item;

  return (
    <div className="single__course__item">
      <div className="faculty__img" style={{ height: '250px'}}>
  <img src={imgUrl} alt="" className="w-100 h-100 object-fit-cover" />
</div>

      <div className="course__details">
        <h6 className="course__title mb-1"  style={{ fontSize: '1.5rem' }}>{title}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-2"  style={{ fontSize: '1.1rem' }}>
             {rating}
          

          </p>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
