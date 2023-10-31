import React from "react";

function Home(props) {
    return(
        <div className="Home">
            <h1>{props.header}</h1>
            <h2>Section - 02</h2>
            <p>WVU ID: 800390863</p>
            <p>Hi I am Ethan</p>
        </div>
    );
}

export default Home;