import React from "react";
import { Link } from "react-router-dom";

function Chocolate () {
    return (
        <div>
            <h1>Chocolate!</h1>
            <Link to='/'>Back to Menu</Link>
        </div>
    )
}

export default Chocolate;