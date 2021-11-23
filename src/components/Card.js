import PropTypes from "prop-types";
import "../SCSS/_Card.scss";
import { Link } from "react-router-dom";








function Card({data}) {

    return (
        <div className="cards text-center bg-dark animate__animated animate__fadeInUp ">
          <Link to={ `/${data.category}/detail/${data.id} `} style={{textDecoration:"none"}}>
      <div>
        <img src={data.img} alt="a wallpaper" className="card-img" />
      </div>
      <div className="card-body text-light" style={{position:"relative"}}>
        <h4 className="card-title mt-1">{data.name}</h4>
        <p className="mb-5">{data.card_description}</p>
        <div style={{position:"absolute", left:"17%",top:"30%"}}>
        <p className="card-text text-secondary mt-5">precio:
         <strong> {data.price} $</strong>
        </p>
        </div>
      </div>
      </Link>
    </div>
  );
}

Card.propTypes = {
  card_description: PropTypes.string.isRequired,
    price: PropTypes.string,
    name: PropTypes.string,
    img: PropTypes.string,
  };
  

export default Card
