import React from "react";


function Signup() {
    return (
        <>
            <div className="col-md-12 pt-2 bg-info justify-content-center">
                <h1 className="text-center">Sign up</h1>
                <form className="text-center pt-2">
                    <label>Name </label>
                    <input type="text" /><br>
                    </br>
                    <br></br>
                    <label>Email </label>
                    <input type="text" /><br>
                    </br>
                    <br></br>
                    <button className="btn btn-outline-dark">sign up</button>
                </form>
            </div>
        </>
    )
}

export default Signup;