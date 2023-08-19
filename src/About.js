import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

export default function About() {
  return (
    <Box margin='2vw'>
        <Typography fontSize='25px' fontFamily='inherit' fontWeight='900' marginBottom='1vw'>About</Typography>
      <Accordion sx={{bgcolor:'lightgrey'}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontSize='20px' fontWeight='bold'>Analyze your text</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{bgcolor:'#CAD5E2'}}>
          <Typography>
          TextAnalyzer gives you a way to analyze your text quickly and efficently. Be it word count, charachter count
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion   sx={{bgcolor:'lightgrey'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography  fontSize='20px' fontWeight='bold'>Free to use</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{bgcolor:'#CAD5E2'}}>
          <Typography>
          TextAnalyzer is a free charachter counter tool that provides insatnt charchter countand word count statistics for a given text. textAnalyzer reports the number of words and charchter . thus it is suitable for writing text with word/ charchter limit.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion  sx={{bgcolor:'lightgrey'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography  fontSize='20px' fontWeight='bold'>Browsere Compatible</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{bgcolor:'#CAD5E2'}}>
            <Typography >
            This word counter software works in any web browser such as chrome, firefox, internet explorer, safari,opera etc. It suits to count charchter in facebook, blog,books ,excel document, pdf document, essay etc.
            </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
  );
}