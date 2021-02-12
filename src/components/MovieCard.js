import React from "react";

function MovieCard(props) {
    const { Year, Title, Plot, Actors, Runtime, Rated } = props;
    return (
        <article className="container-movie">

            <div id="title"><p>[{Year}] {Title}</p></div>
            <div id="plot"><p>{Plot}</p></div>
            <div>
                <p>
                    <strong>Actors:</strong> {Actors}<br />
                    <strong>Runtime:</strong> {Runtime}<br />
                    <strong>Rated:</strong> {Rated}

                </p>
            </div>

        </article>

    )
}

export default MovieCard;