import React from 'react';
import Card from "./Card"
import image1 from "../imagenes/image1.jpg";




const cards = [
    {
      id: 1,
      title: "link 1",
      image: image1,
      url: "https://www.coderhouse.com/",
    },
    {
      id: 2,
      title: "link 2",
      image: image1,
      url: "https://www.youtube.com/",
    },
    {
      id: 3,
      title: "link 3",
      image: image1,
      url: "https://www.instagram.com/?hl=es",
    },
  ];

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="row">
            {cards.map(({ title, image, url, id }) => (
              <div className="col-md-4" key={id}>
                <Card imageSource={image} title={title} url={url} />
              </div>
            ))}
          </div>
        </div>
      );
    }
export default Cards
