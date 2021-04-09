import React  from 'react';
import { Link } from 'react-router-dom';

export default function HotelCard({name, image, location, id}){
    return (
        <article className="hotelCard">
            <img src={image} alt={image}/>
            <h3>{name} in {location}</h3>
            <Link to={'/details/' + id}>View Details</Link>
        </article>
    );
}