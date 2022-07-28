import React from 'react'
import './productcard.css'
import PropTypes from 'prop-types';
const ProductCard = ({product:{img,nom,prix,qte}}) => {
    // console.log(product)
  return (
    <div>
        <ul className="cards">
  <li>
    <a href className="card">
      <img src={img} className="card__image" width="40px " alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div className="card__header-text">
            <h3 className="card__title">{nom}</h3>            
            <span className="card__status">{prix}</span>
          </div>
        </div>
        <p className="card__description">{qte} </p>
      </div>
    </a>      
  </li>

    
</ul>

    </div>
  )
}
ProductCard.propTypes = {
  product:PropTypes.object,
  
};

export default ProductCard