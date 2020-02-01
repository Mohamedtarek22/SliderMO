import React from 'react';


const Card =({property})=>{
    const {index,picture,headline}=property;
  return(
      <div className="card">
          <img src={picture}/>
          <span className="index">{index+1}</span>
          <p>{headline}</p>

      </div>
  )
}

export default Card;