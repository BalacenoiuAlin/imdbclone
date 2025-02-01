import React from "react";

const NavBar = () => {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.title}>🎬 Movie Explorer</h1>
        </nav>
    );
};

const styles = {
    navbar: {
        width: "100%",
        backgroundColor: "#0d253f",
        color: "white",
        padding: "15px 20px",
        textAlign: "center",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "1000",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    },
    title: {
        margin: 0,
        fontSize: "24px",
        fontWeight: "bold"
    }
};

export default NavBar;
