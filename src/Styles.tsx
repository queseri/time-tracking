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
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    alignItems: 'center',
    overflow: 'hidden',
    paddingBlock: '2rem',
}
export const Heading1 = {
    fontSize: '1rem', color: Themes.palette.primary.offwhite
}
export const Heading1Span = {
    fontSize: '1.5rem',
    color: Themes.palette.primary.white
}

export const ImageStyles = {
    display: 'block',
    width: '4rem',
    height: '4rem',
    border: '4px solid white',
    borderRadius: '50%'
}


