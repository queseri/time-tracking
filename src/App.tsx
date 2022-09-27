/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Stack } from '@mui/material';
import { css } from '@emotion/react';
import Profile from './images/image-jeremy.png';
import Ellipsis from './images/icon-ellipsis.svg';
import { HeaderGrid, MainGrid, Main, DataGrid } from './Styles';
import './App.css';
import { Btn } from './components/ButtonComponent';
import DataImage from './components/DataImage';
import DataComponent from './components/DataComponent';
import Heading from './components/Heading';

function App() {

  const [data, setData] = useState([] as any[]);
  const initState = {
    daily: true,
    weekly: false,
    monthly: false
  }
  const [buttonState, setButtonState] = useState(initState)
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
   
    if (id === 'monthly') {
      setButtonState({
        weekly: false,
        monthly: true,
        daily: false
      })
     
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
      setButtonState({
        weekly: true,
        monthly: false,
        daily: false
      })
     
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
      setButtonState({
        weekly: false,
        monthly: false,
        daily: true
      })
    
      const datum = data.map((item: {
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
    }
    //
  }

  const getData = async () => {
    const url = 'data.json';
    try {
      const response = await fetch(url)
      const dataResponse = await response.json()
     
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
          <Heading src={Profile} />
          {/*control buttons start */}
          <Stack direction={{ xs: 'row', md: 'column' }} spacing={2}
            aria-controls="time-id"
            justifyContent='center' paddingTop={'2rem'} paddingBottom={'2rem'}>
            <Btn text='daily' active={buttonState.daily} clickHandler={() => handleClick('daily')} />
            <Btn text='weekly' active={buttonState.weekly} clickHandler={() => handleClick('weekly')} />
            <Btn text='monthly' active={buttonState.monthly} clickHandler={() => handleClick('monthly')} />
          </Stack>
          {/*control buttons end */}
        </Grid2>
        {/* grid first child  - heading section end */}

        {/* grid second child  - heading section start */}
        <Grid2 container xs={12} md={9} sx={DataGrid} aria-live='polite' aria-atomic={true} role='region' id='time-id' >
          {targetData && targetData.length > 0 &&
            targetData.map((item) => <Grid2 key={item.title} xs={12} sm={6} lg={4} gap={2}
              sx={{ backgroundColor: 'inherit' }} >
              {/*Card wrapper */}
              <Paper sx={{
                backgroundColor: item.bg, borderRadius: '15px', overflow: 'hidden',
                ":hover": { cursor: 'pointer', opacity: 0.8, }
              }}>
                {/* Card first child with image */}
                <DataImage src={item.img} />
                {/* Card first child with image end*/}

                {/* Card second child - data */}
                <DataComponent title={item.title} src={Ellipsis}
                  currentDuration={item.currentDuration}
                  previousDuration={item.previousDuration}
                  term={item.term}
                />
                {/* Card second child - data - end*/}
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
