/** @jsxImportSource @emotion/react */
import { Box, Typography } from '@mui/material'
import { css } from '@emotion/react';
import { H1Container, Heading1, Heading1Span, ImageStyles } from '../Styles'

function Heading(props: { src: string; }) {
    return (
        <Box sx={H1Container}>
            <Typography variant='h1'
                gutterBottom={true} align='left'
                sx={Heading1} fontFamily='Rubik'>
                Report for
                <Typography component={'span'}
                    sx={Heading1Span} fontFamily='Rubik' >Jeremy Robson
                </Typography>
            </Typography>
            <img css={css`${ImageStyles}`} src={props.src} alt="" loading='lazy' />
        </Box>
    )
}

export default Heading