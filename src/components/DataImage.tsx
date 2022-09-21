/** @jsxImportSource @emotion/react */
import { Box } from '@mui/material'
import { css } from '@emotion/react';

function DataImage(props: { src: string }) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <img src={props.src} alt="" css={css`max-height: 60px`} />
        </Box>
    )
}

export default DataImage