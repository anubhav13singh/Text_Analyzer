import { Box } from '@mui/material'
import React from 'react'

function Alert({alert}) {
    
  return (
   <Box width='100%' height='30px'>
    {
      alert && <Box bgcolor='#50DBB4' padding='10px'><strong>{alert.type}: <i>{alert.msg}</i></strong></Box>

   }
   </Box>
   
  )
}

export default Alert