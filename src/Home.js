import React, { useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Alert from '@mui/material/Alert';

function Home() {
  const [text, setText] = useState('')
  
  const handleUpperCase = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    <Alert severity="success">This is a success alert — check it out!</Alert>
  }

  const handleLowerCase = () =>{
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleCopy = () =>{
     navigator.clipboard.writeText(text);
  }

  const handleClearText = () =>{
    let newText = '';
    setText(newText);
  }
  const handleExtraSpace = () =>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "));
  }
  return (
    <>
      <Stack>
        <Typography fontSize= '18px' fontStyle='italic' fontWeight='600' margin='2vw 0 0 1vw' padding='20px 09px 0px 0px'>
           It is a tool that allows you to analyse a text by counting the number of words and characters present.
        </Typography>

         <Box display='flex' alignItems='center' justifyContent='center' margin='20px'>
            <textarea  className='textarea' cols={200} rows={10} value={text} onChange={(e) => setText(e.target.value)}> </textarea>
         </Box>   
         
      </Stack>
     
        
        <Box margin='1vw 2vw' display='flex' flexDirection='row' flexWrap='wrap'
       justifyContent='flex-start' gap='10px'>
        <button onClick={handleUpperCase}> Convert to Uppercase</button>
        <button onClick={handleLowerCase}> Convert to loewerCase</button>
        <button onClick={handleCopy}> Copy to clipboaerd</button>
        <button onClick={handleClearText}> Clear text</button>
        <button onClick={handleExtraSpace}> Remove Extra Space</button>
     </Box>
      
        <Typography margin='4vw 2vw 10px 2vw' variant='h5' fontWeight='600'>
          Preview <br/>
           <Typography fontSize='16px'> {text.length >0 ? text : 'Nothing to evaluiate'}</Typography>
        </Typography>
        

        <Typography variant='h5' fontWeight='600' margin='2vw' >
          Your text summary
        </Typography>

        <Typography margin='1vw 2vw 0 2vw ' >
          {text.length} <span>characters </span>,  {text.length === 0 ? 0 : text.trim().split(' ').length} <span>Words</span> <br/>

          {text.trim().length * 0.019 } <span>minutes to read</span>
        </Typography>
    </>
  )
}

export default Home