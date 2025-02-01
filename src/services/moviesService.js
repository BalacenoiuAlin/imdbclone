const API_KEY = "4f8b9c44ca002ae8f1d6c5ce3e0009f8";
const BASE_URL = "https://api.themoviedb.org/3";

const fetchMovies = async (endpoint, queryParams = "") => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}${queryParams}`);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.status_message || "Failed to fetch data.");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching movies:", error);
        alert("Failed to load movies. Please try again later.");
        return null;
    }
};

export const getPopularMovies = () => fetchMovies("/movie/popular");
export const getMovieDetails = (movieId) => fetchMovies(`/movie/${movieId}`);
export const searchMovies = (query) => fetchMovies(`/search/movie`, `&query=${encodeURIComponent(query)}`);
