import React, { Component } from 'react';
import HotelCard from './HotelCard';

export default class HotelList extends Component {
    render () {
        return(
            <div>
                {this.props.hotels.map(h => (
                    <HotelCard
                        key={h.id}
                        id={h.id}
                        name={h.name}
                        location={h.location}
                        image={h.image}
                    />
                ))}
            </div>
        )
    }
}