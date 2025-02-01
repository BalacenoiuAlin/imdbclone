import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div style={styles.card}>
            <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/300x450"}
                alt={movie.title}
                style={styles.image}
            />
            <div style={styles.details}>
                <h2>{movie.title}</h2>
                <p><strong>Release Date:</strong> {movie.release_date}</p>
                <p><strong>Rating:</strong> {movie.vote_average} ⭐</p>
                <p>{movie.overview ? movie.overview.substring(0, 100) + "..." : "No description available."}</p>
            </div>
        </div>
    );
};

const styles = {
    card: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#0d253f",
        color: "white",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        padding: "20px",
        margin: "10px",
        maxWidth: "300px",
        textAlign: "center",
        transition: "transform 0.2s ease-in-out",
    },
    image: {
        width: "100%",
        borderRadius: "10px",
    },
    details: {
        padding: "10px",
    }
};

export default MovieCard;
