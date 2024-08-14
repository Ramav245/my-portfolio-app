import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Card({title, desc, onClick}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 350,
          height: 100,
        },
      }}
    >    
      <Paper elevation={25} onClick={onClick} >
        <h2 className="font-extrabold px-2 py-2">{title}</h2>
        <p className="px-2 py-2">{desc}</p>
      </Paper>
    </Box>
  );
}
