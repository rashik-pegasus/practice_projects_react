import React from 'react'
import ParentComponent from './ParentComponent'
import ChildComponent from './ChildComponent'

const MiddleProp = ({content}) => {
  return (
    <>
        <ChildComponent content={content}/>
    </>
  )
}

export default MiddleProp