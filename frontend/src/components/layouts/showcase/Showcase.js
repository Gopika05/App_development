import React from "react";
import './showcase.styles.css'
import Navbar from "../navbar/Navbar";
import SearchInputForm from "../../forms/searchInputForm/SearchInputForm";

const Showcase = () => {
    return (
        <section className="showcase-container">
            <Navbar darkTheme={false}/>
            
            <div className="overlay"></div>
            <div className="showcase-content">
                <h1>Interactive <span className="text-primary">Books </span>Available</h1>
                <p><b>LISTEN READ WATCH BUY</b></p>
                
                <SearchInputForm darkTheme={ true }/>
            </div>
        </section>
    )
}

export default Showcase;