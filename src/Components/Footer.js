import React from 'react'
import PropTypes from 'prop-types';
const Footer = ({children,text}) => {
  return (
    <div>
       <h1>txt: {text}</h1>
        CopyRight F3
        {children}
    </div>
  )
}
Footer.defaultProps={
    text:"str"
}
Footer.propTypes = {
  text: PropTypes.string,
  children: PropTypes.any
};
export default Footer
