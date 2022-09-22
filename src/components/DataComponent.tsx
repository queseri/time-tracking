import { Box, Typography } from '@mui/material'
import {
    CurrentTime, DataContainer, DataHeadingWrapper,
    DurationTrackerWrapper, HeadingH2, PreviousTime
} from '../Styles'

function DataComponent(props: {
    currentDuration: number; title: string; src: string; previousDuration: number; term: string
}) {
    return (
        <Box sx={DataContainer} aria-live='polite' aria-atomic={true}>
            <Box sx={DataHeadingWrapper}>
                <Typography variant='h2'
                    sx={HeadingH2}>{props.title}</Typography>
                <img src={props.src} alt="" />
            </Box>
            <Box
                sx={DurationTrackerWrapper}>
                <Typography paragraph sx={CurrentTime} >
                    {props.currentDuration} {props.currentDuration === 0 || props.currentDuration > 1 ? <abbr>{`hrs`}</abbr> : <abbr>{`hr`}</abbr>}
                </Typography>
                <Typography paragraph sx={PreviousTime}>
                    {props.previousDuration} {props.previousDuration === 0 || props.currentDuration > 1 ? <abbr>{`hrs`}</abbr> : <abbr>{`hr`}</abbr>} {props.term}
                </Typography>
            </Box>
        </Box>
    )
}

export default DataComponent