import React from 'react';

import './Color.css';


const Color = (props) => (
   <div className="color-icon" style={{backgroundColor: `${props.color}`}}>
   </div>
);

export default Color;