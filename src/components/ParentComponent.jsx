import React from 'react';
import ChildComponent from './ChildComponent';
import MiddleProp from './MiddleProp';

const ParentComponent = ({text}) => {
  return (
    <>
        <MiddleProp content={text}/>
    </>
  )
}

export default ParentComponent