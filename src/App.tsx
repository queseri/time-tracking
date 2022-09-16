import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import { createTheme } from '@mui/system';
import Profile from './images/image-jeremy.png';
import './App.css';

function App() {
  const [data, setData] = useState([] as any[]);
  
  const theme = createTheme({
    palette: {
      primary: {
        dark: '#0E1323',
        midblue: '#5747EA',
        offwhite: '#BBC0FF',
        white: 'ffffff',
      },
      secondary: {
        dark: '#1C204B',
        midblue: '#7078C9',
        orange: '#FF8B64',
        cyan: '#55C2E6',
        pink: '#FF5E7D',
        green: '#4BCF82',
        purple: '#7335D2',
        lightyellow: '#F1C75B'

      }
    }
  })
  const getData = () => {
    fetch('data.json',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (response) {
        console.log(response);
        setData(response)
      });
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Container sx={{ backgroundColor: theme.palette.secondary.dark }}>

      <Grid2 container spacing={2} gap={0}>
        <Grid2 xs={12} sm={6} sx={{ backgroundColor: theme.palette.primary.midblue }}>
          <Typography variant='h1' gutterBottom={true} align='center'
            sx={{ fontSize: '2rem', color: theme.palette.primary.white }}>
            Report for Jeremy Robson
          </Typography>
          <img src={Profile} alt="Jeremy Robson" />
          <Stack direction='row' spacing={2} justifyContent='center'>
            <Button variant='contained' size='small'>1</Button>
            <Button variant='outlined' size='small'>2</Button>
            <Button variant='outlined' size='small'>3</Button>
          </Stack>
        </Grid2>
        {data && data.length > 0 &&
          data.map((item, idx: number) => <Grid2 key={item.title} xs={12} sm={6}
            sx={{ backgroundColor: idx % 2 === 0 ? `#ff23aa` : `#3451aa` }} >
            {item.title}
          </Grid2>)
        }
      </Grid2>

    </Container>
  );
}

export default App;
