import React, { Component } from 'react';
import FurnitureCard from './FurnitureCard';


export default class FurnitureList extends Component {
    render(){
        return(
            <div className="row space-top">
                <FurnitureCard />
                <FurnitureCard />
                <FurnitureCard />
                
            </div>
        )
    }
}
