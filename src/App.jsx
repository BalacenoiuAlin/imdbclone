import React from "react";
import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <div>
            <NavBar />
            <div style={{ marginTop: "80px" }}>
                <MoviesList />
            </div>
        </div>
    );
};

export default App;
