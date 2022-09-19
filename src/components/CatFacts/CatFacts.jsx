import { useEffect, useState } from 'react';

const CatFacts = (props) => {

  return (
    <div className='cat-facts-container' key={props?.idx}>
      <span>{props?.idx + 1}. </span>
      <span>{props?.currFact?.fact}</span>
    </div>
  )
};

export default CatFacts;
