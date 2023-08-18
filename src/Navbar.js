import { Typography, Stack, Box } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css'

function Navbar() {
    const [toggle, setToggle] = useState(false); 
  return (
    <>
       <Stack direction='row' padding='0px 20px' alignItems='center' justifyContent='space-between' backgroundColor= 'rgb(238,174,202)'>
         <Typography fontSize={{xs:'6vw', sm:'5vw', md:'3vw'}}>
            Text Analyzer
         </Typography>
         
         <Box className={ toggle ?' mobile-nav' : 'nav'} >
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/About'>About</NavLink>
            
         </Box>
            
         <i className='icon' onClick={() => setToggle(!toggle)}> <MenuIcon/> </i>
       </Stack>
    </>
  )
}

export default Navbar
