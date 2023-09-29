import React from 'react';
import "./card.css";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const Card = (props) => {
  return (
    <div className='box'>
        <img src={props.image} alt="" className="boximg" />
        <h3 className="boxtitle">
            {props.title}
        </h3>
        <p className="boxprice">{props.price}</p>
        <div className="boxrating">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
        </div>

        <button>
            <span>Add to Cart</span>
            <FaShoppingCart className='boxicon'/>
        </button>
        
    </div>
  )
}

export default Card