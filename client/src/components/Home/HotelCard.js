import React  from 'react';
import { Link } from 'react-router-dom';

export default function HotelCard({ name, image, location, id, canDelete, del }) {
    return (
        <article className="hotelCard">
            <img src={image} alt={image}/>
            <h3>{name} in {location}</h3>
            <Link to={'/details/' + id}>View Details</Link>
            {canDelete && <a href="javascript:void(0)" onClick={del}>Delete</a>}
        </article>
    );
}