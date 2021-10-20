import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Card.css";


function Card({data}) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={data.img} alt="a wallpaper" className="card-img-top" style={{width:"200px", height:"280px"}} />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{data.name}</h4>
        <p className="card-text text-secondary">

       {data.albumId}
        </p>
        <Link to={ `/detail/${data.char_id} `}>
       <p className="btn btn-outline-secondary border-0">ver mas sobre {data.name}</p>
       </Link>
      </div>
    </div>
  );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string,
    url: PropTypes.string,
    imageSource: PropTypes.string
  };
  

export default Card
