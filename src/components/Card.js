import PropTypes from "prop-types";


import "./Card.css";





function Card({data}) {
    return (
        <div style={{width:"240px", height:"380px", borderRadius:"15px",border:"1px solid black"}} className="card text-center bg-dark animate__animated animate__fadeInUp ">
      <div>
        <img src={data.img} alt="a wallpaper" className="card-img-top" style={{width:"200px", height:"200px"}} />
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
    </div>
  );
}

Card.propTypes = {
  card_description: PropTypes.string.isRequired,
    price: PropTypes.string,
    url: PropTypes.string,
    imageSource: PropTypes.string
  };
  

export default Card
