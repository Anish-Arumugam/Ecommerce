import React from "react";
import Products from "./Products";
import About from "./About";
import Mobile from "./Mobile";

function Home() {
    return (
        <div className="hero">
            <div className="card text-bg-dark">
                <img src="asset/gb.jpg" class="card-img" alt="background" height="550px" />
                <div className="card-img-overlay">
                    <h5 className="card-title display-3 fw-bolder text-black">NEW SEASON ARRIVALS</h5>
                    <h3 className="hello text-black fw-bolder ps-5 pb-3">CHECK OUT ALL THE TRENDS</h3>
                </div>
            </div>
            <Products />
            <hr></hr>
            <About />
            <hr></hr>
            <Mobile />
        </div>


    )
}
export default Home;