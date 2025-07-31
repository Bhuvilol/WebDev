import React from 'react';

export const SeriesCard = (props) => {
    console.log(props);
    const {id, image, name, rating, description, genre, cast, watch_url} = props.data;
    return (
        <li key={id}>
                <div>
                    <img 
                        src={image} 
                        alt="logo" 
                        width="40%" 
                        height ="40%"
                    />

                </div>
                <h2>Name : {name}</h2>
                <h3>Rating : {rating}</h3>
                <h3>Genre : {genre} </h3>
                <p>Description : {description}</p>
                <p>Cast : {cast}</p>
                <a href="watch_url">
                    <button>Watch Now</button>
                </a>
            </li>
    );
};