import React, { Component } from 'react';
import {  postReview } from '../../api/remote';
import Review from './Review';

export default class ReviewSection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rating: 5,
            comment: '',
            reviews: [],
            error: false
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    async onSubmitHandler(e) {
        e.preventDefault();
        const res = await postReview(this.props.hotelId, this.state.comment, Number(this.state.rating));
        
        if (!res.success) {
            this.setState({ error: res});
            return;
        }
    }

    render() {

        let errors = null;
        if (this.state.error) {
            errors = (
                <div>
                    <h2 className="errorMessage">{this.state.error.message}</h2>
                    {Object.keys(this.state.error.errors).map(k => {
                        return <p key={k}>{this.state.error.errors[k]}</p>;
                    })}
                </div>
            );
        }

        return(
            <div>
                    <form onSubmit={this.onSubmitHandler}>
                        <h2>Leave a review</h2>
                        {errors}
                        <div>
                            Rating:
                        <select onChange={this.onChangeHandler} name="rating" value={this.state.rating}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        </div>
                        Comment <br/>
                        <textarea
                            onChange={this.onChangeHandler}
                            name="comment"
                            value={this.state.comment}
                            style={{ resize: 'none', width: '90%', height: '100px' }} /><br />
                            <input type="submit" value="Post review" 
                        />
                    
                        {this.state.reviews.map(r => (
                            <Review user={r.user} comment={r.comment} rating={r.rating} />
                        ))};
                    </form>
                </div>
        )
    }
}
