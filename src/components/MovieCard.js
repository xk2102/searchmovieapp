import React from "react";

function MovieCard(props) {
    return (
        <div className="container-movie">

            <div id="title"><p>[{props.Year}] {props.Title}</p></div>
            <div id="plot"><p>{props.Plot}</p></div>
            <div>
                <p>
                    <strong>Actors:</strong> {props.Actors}<br />
                    <strong>Runtime:</strong> {props.Runtime}<br />
                    <strong>Rated:</strong> {props.Rated}

                </p>
            </div>

        </div>

    )
}

export default MovieCard;