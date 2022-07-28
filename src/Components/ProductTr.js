import React from 'react'
import PropTypes from 'prop-types';
const ProductTr = ({el,handelname}) => {
  return (
    <tr>
        <td>
            <button onClick={()=>handelname(el.nom)}>btn</button>
        </td>
        <td>
            <img width="250px "src={el.img} alt="" />
        </td>
        <td>{el.nom}</td>
        <td>{el.prix}</td>
        <td>{el.qte}</td>
    </tr>
  )
}
ProductTr.propTypes = {
  el:PropTypes.object,
  handelname: PropTypes.func
  
};

export default ProductTr