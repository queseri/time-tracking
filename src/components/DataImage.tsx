import { Box } from '@mui/material'

function DataImage(props: { src: string }) {
    return (
        <Box sx={{
            display: 'flex', justifyContent: 'flex-end',
            alignItems: 'center', position: 'relative', height: '60px',
            ":before": {
                position: 'absolute',
                content: '""',
                backgroundImage: `url(${props.src})`,
                width: '100%',
                top: '0',
                height: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right',
            }
        }}>
            
        </Box >
    )
}

export default DataImage