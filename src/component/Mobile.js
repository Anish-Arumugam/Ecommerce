import React from "react";

function Mobile() {
    return (
        <>
            <div className="col-md-12 pt-2 justify-content-center">
                <h1 className="text-center">Contact</h1>
                <form className="text-center pt-2">
                    <label>Name </label>
                    <input type="text" /><br>
                    </br>
                    <br></br>
                    <label>Email </label>
                    <input type="text" /><br>
                    </br>
                    <br></br>
                    <label>number </label>
                    <input type="number" /><br>
                    </br>
                    <br>
                    </br>
                    <button className="btn btn-outline-dark">submit</button>
                </form>
            </div>
        </>
    )
}

export default Mobile;