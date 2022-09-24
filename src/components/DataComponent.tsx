import { Box, Typography } from '@mui/material'
import {
    CurrentTime, DataContainer, DataHeadingWrapper,
    DurationTrackerWrapper, HeadingH2, PreviousTime
} from '../Styles'

function DataComponent(props: {
    currentDuration: number; title: string; src: string; previousDuration: number; term: string
}) {
    return (
        <Box sx={DataContainer} >
            <Box sx={DataHeadingWrapper}>
                <Typography variant='h2'
                    sx={HeadingH2}>{props.title}</Typography>
                <img src={props.src} width='21px' height='5px' alt="" />
            </Box>
            <Box
                sx={DurationTrackerWrapper}>
                <Typography paragraph sx={CurrentTime} >
                    {props.currentDuration} {props.currentDuration === 0 || props.currentDuration > 1 ?
                        <abbr title='hours'>{`hrs`}</abbr> :
                        <abbr title='hour'>{`hr`}</abbr>}
                </Typography>
                <Typography paragraph sx={PreviousTime}>
                    {props.term} {` - `}   {props.previousDuration} {props.previousDuration === 0 || props.previousDuration > 1 ? <abbr title='hours'>{`hrs`}</abbr> : <abbr title='hour'>{`hr`}</abbr>}
                </Typography>
            </Box>
        </Box>
    )
}

export default DataComponent