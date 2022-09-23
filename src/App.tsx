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
          <Heading src={Profile} />
          {/*control buttons start */}
          <Stack direction={{ xs: 'row', md: 'column' }} spacing={2}
            justifyContent='center' paddingTop={'2rem'} paddingBottom={'2rem'}>
            <Btn text='daily' clickHandler={() => handleClick('daily')} />
            <Btn text='weekly' clickHandler={() => handleClick('weekly')} />
            <Btn text='monthly' clickHandler={() => handleClick('monthly')} />
          </Stack>
          {/*control buttons end */}
        </Grid2>
        {/* grid first child  - heading section end */}

        {/* grid second child  - heading section start */}
        <Grid2 container xs={12} md={9} sx={DataGrid} >
          {targetData && targetData.length > 0 &&
            targetData.map((item) => <Grid2 key={item.title} xs={12} sm={6} lg={4} gap={2}
              sx={{ backgroundColor: 'inherit' }} >
              {/*Card wrapper */}
              <Paper sx={{
                backgroundColor: item.bg, borderRadius: '15px', overflow: 'hidden',
                ":hover": { cursor: 'pointer', opacity: 0.5 }
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
