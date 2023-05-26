import React from 'react'
import { Link } from 'react-router-dom';

function Card({ data }) {
    return (
      <div className="card pb-20 mb-10">
        <div className="card-img-container h-100">
          <img src={data.photo} alt={data.city} className="card-img" style={{ 'height' : '100%'}}/>
        </div>
        <div className="card-body d-flex flex-column pb-10">
          <h5 className="card-title">{data.city}</h5>
          <p className="card-price">${data.price}</p>
          <p className="card-description">{data.description}</p>
          <div className="mt-auto pb-10">
            <Link to={`/Details/${data.id}`} className="btn btn-outline-secondary">
              Details
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;