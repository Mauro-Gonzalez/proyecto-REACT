import React from 'react';
import Card from "./Card";
import image1 from "../imagenes/image1.jpg";




const cards = [
    {
      id: 1,
      title: "cosa 1",
      price:500,
      image: image1,
      url: "https://www.coderhouse.com/",
    },
    {
      id: 2,
      title: "cosa 2",
      price:600,
      image: image1,
      url: "https://www.youtube.com/",
    },
    {
      id: 3,
      title: "cosa 3",
      price:700,
      image: image1,
      url: "https://www.instagram.com/?hl=es",
    },
  ];

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="row">
            {cards.map(({ title,price, image, url, id }) => (
              <div className="col-md-4" key={id}>
                <Card imageSource={image} title={title} price={price} url={url} />
              </div>
            ))}
          </div>
        </div>
      );
    }
export default Cards
