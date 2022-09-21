import { createTheme } from '@mui/system';

export const Themes = createTheme({

    palette: {
        primary: {
            dark: '#0E1323',
            midblue: '#5747EA',
            offwhite: '#BBC0FF',
            white: '#ffffff',
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
export const Main = {
    backgroundColor: Themes.palette.primary.dark,
    minHeight: '100vh'
}
export const BtnStyles = {
    textTransform: 'capitalize',
    fontSize: '1.125rem',
    fontFamily: 'Rubik',
    fontWeight: 400,
    color: Themes.palette.secondary.midblue,
    lineHeight: '1',
    ":focus, :hover": {
        color: Themes.palette.primary.white,
    }
}

export const MainGrid = {
    paddingInline: '1.5rem',
    paddingBlock: '5rem',
}
export const HeaderGrid = {
    backgroundColor: Themes.palette.secondary.dark,
    borderRadius: '10px',
    padding: 0
}
export const H1Container = {
    backgroundColor: Themes.palette.primary.midblue,
    borderRadius: '10px',
    display: 'flex',
    overflow: 'hidden',
    paddingBlock: '2rem',
    flexDirection: {
        xs: 'row-reverse',
        md: 'column-reverse'
    },
    justifyContent: 'space-around',
    alignItems: {
        xs: 'center',
        md: 'baseline'
    },
    paddingInline: {
        md: '1rem',
    },
    gap: {
        lg: '2rem'
    },

}
export const Heading1 = {
    display: 'flex',
    flexDirection: 'column',
    fontSize: {
        xs: '1rem',
    },
    color: Themes.palette.primary.offwhite
}
export const Heading1Span = {
    fontSize: {
        xs: '1.5rem',
        lg: '2.5rem'
    },
    color: Themes.palette.primary.white
}

export const ImageStyles = {
    display: 'block',
    width: '4rem',
    height: '4rem',
    aspectRatio: '1',
    border: '4px solid white',
    borderRadius: '50%',
    '@media(min-width: 1200px)': {
        width: '4.875rem',
        height: '4.875rem',
    }
}

export const DataContainer = {
    borderRadius: '15px',
    position: 'relative',
    zIndex: 1,
    backgroundColor: Themes.palette.secondary.dark,
    paddingInline: '1rem',
    paddingBlock: {
        xs: '1rem',
        lg: '2.5rem'
    }
}

export const DataHeadingWrapper = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: {
        xs: 'center',
        lg: 'flex-start'
    }
}

export const HeadingH2 = {
    fontSize: '1.25rem',
    fontFamily: 'Rubik',
    color: Themes.palette.primary.white
}

export const DurationTrackerWrapper = {
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
}

export const CurrentTime = {
    fontSize: {
        xs: '2rem',
        md: '2.5rem',
        lg: '3.5rem'
    },
    fontWeight: '300',
    fontFamily: 'Rubik',
    color: Themes.palette.primary.white
}

export const PreviousTime = {
    marginBottom: 0,
    fontSize: '0.9375rem',
    fontWeight: '400',
    fontFamily: 'Rubik',
    color: Themes.palette.primary.offwhite,
}

