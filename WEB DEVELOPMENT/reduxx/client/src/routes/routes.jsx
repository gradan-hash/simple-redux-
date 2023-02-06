import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Routes() {


  return (

    <>
    
    
    
    <Link to ='/'>Register</Link>

    <Link to ='/login'>Login</Link>

    
    
    
    
    
    
    <Outlet/>
    
    
    </>




  )
}

export default Routes