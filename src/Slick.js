import Slider from "react-slick";
import "./Slick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slick() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1000,
        setting: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="container">
      <h1>PROFILE</h1>
      <Slider {...settings}>
        <div>
          <img src="man.jpg" alt="" />
        </div>
        <div>
          <img src="man2.jpg" alt="" />
        </div>
        <div>
          <img src="woman.jpg" alt="" />
        </div>
        <div>
          <img src="woman2.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Slick;
