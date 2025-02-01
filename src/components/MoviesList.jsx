import React, { useEffect, useState } from "react";
import { getPopularMovies } from "../services/moviesService";
import MovieCard from "./MovieCard";

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPopularMovies();
            if (data && data.results) {
                setMovies(data.results);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Popular Movies</h1>
            {loading ? (
                <p>Loading movies...</p>
            ) : (
                <div style={styles.grid}>
                    {movies.length > 0 ? (
                        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                    ) : (
                        <p>No movies found.</p>
                    )}
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
    },
    title: {
        color: "white",
        backgroundColor: "#0d253f",
        padding: "10px",
        borderRadius: "8px",
        display: "inline-block"
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
    },
};

export default MoviesList;
