/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import { css } from '@emotion/react';
import Profile from './images/image-jeremy.png';
import Ellipsis from './images/icon-ellipsis.svg';
import {
  H1Container, HeaderGrid, Heading1, Heading1Span, MainGrid,
  ImageStyles, Themes as theme, Main, BtnStyles
} from './Styles';
import './App.css';

function App() {

  const [data, setData] = useState([] as any[]);
  interface TargetData {
    title: string,
    img: string;
    bg: string;
    currentDuration: number,
    previousDuration: number,
    term: string
  }

  const [targetData, setTargetData] = useState<TargetData[]>([])

  function handleClick(id: string) {
    console.log(id)
    console.log(data)
    if (id === 'monthly') {
      const datum = data.map((item: {
        title: string;
        img: string;
        bg: string;
        timeframes: { monthly: { current: number; previous: number; }; };
      }) => (
        {
          title: item.title,
          img: item.img,
          bg: item.bg,
          currentDuration: item.timeframes.monthly.current,
          previousDuration: item.timeframes.monthly.previous,
          term: 'last month'
        }
      ))
      setTargetData(datum)
    } else if (id === "weekly") {
      const datum = data.map((item: {
        title: string;
        img: string;
        bg: string;
        timeframes: { weekly: { current: number; previous: number; }; };
      }) => (
        {
          title: item.title,
          img: item.img,
          bg: item.bg,
          currentDuration: item.timeframes.weekly.current,
          previousDuration: item.timeframes.weekly.previous,
          term: 'last week'
        }
      ))
      setTargetData(datum)
    } else {
      const datum = data.map((item: {
        title: string;
        img: string; bg: string;
        timeframes: { daily: { current: number; previous: number; }; };
      }) => (
        {
          title: item.title,
          img: item.img,
          bg: item.bg,
          currentDuration: item.timeframes.daily.current,
          previousDuration: item.timeframes.daily.previous,
          term: 'yesterday'
        }
      ))
      setTargetData(datum)
    }
    //
  }

  const getData = async () => {
    const url = 'data.json';
    try {
      const response = await fetch(url)
      const dataResponse = await response.json()
      console.log(dataResponse)
      setData(dataResponse)
      const datum = dataResponse.map((item: {
        title: string;
        img: string;
        bg: string;
        timeframes: { daily: { current: number; previous: number; }; };
      }) => (
        {
          title: item.title,
          img: item.img,
          bg: item.bg,
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
    <main css={css`${Main}`}>
      {/* main grid component with 2 children */}
      <Grid2 container maxWidth={'1110px'} margin={'auto'}
        columnSpacing={{ xs: 0, sm: '16px' }} rowSpacing={2} sx={MainGrid}>
        {/* grid first child  - heading section start*/}
        <Grid2 xs={12} md={3} sx={HeaderGrid} >
          <Box sx={H1Container}>
            <Typography variant='h1'
              gutterBottom={true} align='left' sx={Heading1} fontFamily='Rubik'>
              Report for
              <Typography component={'span'} sx={Heading1Span} fontFamily='Rubik' >Jeremy Robson </Typography>
            </Typography>
            <img css={css`${ImageStyles}`} src={Profile} alt="Jeremy Robson" />
          </Box>
          {/*control buttons */}
          <Stack direction={{ xs: 'row', md: 'column' }} spacing={2}
            justifyContent='center' paddingTop={'2rem'} paddingBottom={'2rem'}>
            <Button variant='text' size='small'
              sx={BtnStyles}
              onClick={() => handleClick('daily')}>
              Daily
            </Button>
            <Button variant='text' size='small'
              sx={BtnStyles}
              onClick={() => handleClick('weekly')}>
              Weekly
            </Button>
            <Button variant='text' size='small'
              sx={BtnStyles}
              onClick={() => handleClick('monthly')}>
              Monthly
            </Button>
          </Stack>
        </Grid2>
        {/* grid first child  - heading section end */}
        {/* grid second child  - heading section start */}
        <Grid2 container xs={12} md={9} sx={{
          alignContent: 'space-between',
          paddingInline: { xs: 0, md: '1rem' },
          paddingBlock: { md: 0 }
        }} >
          {targetData && targetData.length > 0 &&
            targetData.map((item) => <Grid2 key={item.title} xs={12} sm={6} lg={4} gap={2}
              sx={{ backgroundColor: 'inherit' }} >
              <Paper sx={{
                backgroundColor: item.bg,
                borderRadius: '15px'
              }}>
                <Box css={css`display: flex; justify-content: flex-end; align-items: center;`}>
                  <img src={item.img} alt="" css={css`max-height: 60px`} />
                </Box>
                <Box className="contentWrapper"
                  sx={{
                    borderRadius: '15px',
                    position: 'relative',
                    zIndex: 1,
                    backgroundColor: theme.palette.secondary.dark,
                    paddingInline: '1rem',
                    paddingBlock: {
                      xs: '1rem',
                      lg: '2.5rem'
                    }
                  }}>
                  <Box className='heading'
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: {
                        xs: 'center',
                        lg: 'flex-start'
                      },

                    }}>
                    <Typography variant='h2'
                      sx={{
                        fontSize: '1.25rem', 
                        fontFamily: 'Rubik',
                        color: theme.palette.primary.white
                      }}>{item.title}</Typography>
                    <img src={Ellipsis} alt="" />
                  </Box>
                  <Box aria-live='polite'
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: {
                        xs: 'center',
                        lg: 'flex-start'
                      },
                      padding: '0.5rem',
                      flexDirection: {
                        lg: 'column'
                      }
                    }}>
                    <Typography paragraph className='current'
                      sx={{
                        fontSize: {
                          xs: '2rem',
                          md: '2.5rem',
                          lg: '3.5rem'
                        },
                        fontWeight: '300',
                        fontFamily: 'Rubik',
                        color: theme.palette.primary.white
                      }} >
                      {item.currentDuration} {item.currentDuration === 0 || item.currentDuration > 1 ? 'hrs' : 'hr'}
                    </Typography>
                    <Typography paragraph className='previous'
                      sx={{
                        marginBottom: 0,
                        fontSize: '0.9375rem',
                        fontWeight: '400',
                        fontFamily: 'Rubik',
                        color: theme.palette.primary.offwhite,
                      }}>
                      {item.previousDuration} {item.previousDuration === 0 || item.currentDuration > 1 ? 'hrs' : 'hr'} {item.term}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid2>)
          }
        </Grid2>
        {/* grid second child  - heading section end */}
      </Grid2>
      {/* main grid end */}
    </main>
  );
}

export default App;
