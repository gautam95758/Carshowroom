import React from "react";
// import web from '../src/image/Hyundai-Grand-i10-Nios-200120231541.jpg';
import { NavLink } from "react-router-dom";


const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <div className="topcar">
                    <img src={props.imgsrc} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text"> {props.desc} </p>  
                        <NavLink to="" className="btn btn-primary">View Details</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;