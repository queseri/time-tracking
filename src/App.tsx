/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import { createTheme } from '@mui/system';
import { css } from '@emotion/react';
import Profile from './images/image-jeremy.png';
import Ellipsis from './images/icon-ellipsis.svg';
import './App.css';

function App() {

  const [data, setData] = useState([] as any[]);
  interface TargetData {
    title: string,
    currentDuration: number,
    previousDuration: number,
    term: string
  }

  const [targetData, setTargetData] = useState<TargetData[]>([])

  function handleClick(id: string) {
    console.log(id)
    console.log(data)
    if (id === 'monthly') {
      const datum = data.map((item: { title: string; timeframes: { monthly: { current: number; previous: number; }; }; }) => (
        {
          title: item.title,
          currentDuration: item.timeframes.monthly.current,
          previousDuration: item.timeframes.monthly.previous,
          term: 'last month'
        }
      ))
      setTargetData(datum)
    } else if (id === "weekly") {
      const datum = data.map((item: { title: string; timeframes: { weekly: { current: number; previous: number; }; }; }) => (
        {
          title: item.title,
          currentDuration: item.timeframes.weekly.current,
          previousDuration: item.timeframes.weekly.previous,
          term: 'last week'
        }
      ))
      setTargetData(datum)
    } else {
      const datum = data.map((item: { title: string; timeframes: { daily: { current: number; previous: number; }; }; }) => (
        {
          title: item.title,
          currentDuration: item.timeframes.daily.current,
          previousDuration: item.timeframes.daily.previous,
          term: 'yesterday'
        }
      ))
      setTargetData(datum)
    }
    //
  }
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

  const getData = async () => {
    const url = 'data.json';
    try {
      const response = await fetch(url)
      const dataResponse = await response.json()
      console.log(dataResponse)
      setData(dataResponse)
      const datum = dataResponse.map((item: { title: string; timeframes: { daily: { current: number; previous: number; }; }; }) => (
        {
          title: item.title,
          currentDuration: item.timeframes.daily.current,
          previousDuration: item.timeframes.daily.previous,
          term: 'yesterday'
        }
      ))
      setTargetData(datum)
      console.log(datum)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Grid2 container
      sx={{
        backgroundColor: theme.palette.primary.dark,
        paddingInline: '1.5rem',
        paddingBlock: '5rem'
      }}>
      <Grid2 xs={12} sm={4} md={3} lg={2}
        sx={{
          backgroundColor: theme.palette.secondary.dark,
          borderRadius: '10px',
        }}>
        <Box sx={{
          backgroundColor: theme.palette.primary.midblue,
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'space-around',
          alignItems: 'center',
          overflow: 'hidden',
          paddingBlock: '2rem',
        }}>
          <Typography variant='h1' gutterBottom={true} align='left'
            sx={{ fontSize: '1rem', color: theme.palette.primary.offwhite }}>
            Report for
            <Typography variant='body2'
              sx={{
                fontSize: '1.5rem',
                color: theme.palette.primary.white
              }}>Jeremy Robson
            </Typography>
          </Typography>
          <img
            css={css`display: block; width: 4rem; height: 4rem;
           border: 4px solid white; border-radius: 50%`}
            className='img-profile'
            src={Profile}
            alt="Jeremy Robson" />
        </Box>
        <Stack direction='row' spacing={2}
          justifyContent='center' paddingTop={'2rem'} paddingBottom={'2rem'}>
          <Button variant='text' size='small' onClick={() => handleClick('daily')}>Daily</Button>
          <Button variant='text' size='small' onClick={() => handleClick('weekly')}>Weekly</Button>
          <Button variant='text' size='small' onClick={() => handleClick('monthly')}>Monthly</Button>
        </Stack>
      </Grid2>
      <Grid2 container xs={12} sm={8} md={9} lg={10}  >

        {targetData && targetData.length > 0 &&
          targetData.map((item, idx: number) => <Grid2 key={item.title} xs={12} sm={6} md={4}
            sx={{ backgroundColor: idx % 2 === 0 ? `#ff23aa` : `#3451aa` }} >
            <Paper sx={{ margin: '1rem' }}>
              <div>
                <Typography variant='h2'>{item.title}</Typography>
                <img src={Ellipsis} alt="" />
              </div>
              <div aria-live='polite'>
                <Typography paragraph className='current'>
                  {item.currentDuration} {item.currentDuration === 0 || item.currentDuration > 1 ? 'hrs' : 'hr'} 
                </Typography>
                <Typography paragraph className='previous'>
                   {item.previousDuration} {item.previousDuration === 0 || item.currentDuration > 1 ? 'hrs' : 'hr'} {item.term}
                </Typography>
              </div>
            </Paper>
          </Grid2>)
        }
      </Grid2>

    </Grid2>
  );
}

export default App;
