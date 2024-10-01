import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorBoundary = () => {

    const error = useRouteError();
    console.log(error);
  return (
    <>
        <div>404 Page not found</div>
        <p>Error Found</p>
    </>
  )
}

export default ErrorBoundary