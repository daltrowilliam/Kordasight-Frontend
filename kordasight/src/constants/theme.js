import { createMuiTheme } from '@material-ui/core/styles'
import { primaryColor, secondaryColor, lightPrimary, darkPrimary, lightSecondary, darkSecondary, whiteColor, blackColor } from './colors'

const theme = createMuiTheme({
    palette: {
        primary: {
          light: lightPrimary,
          main: primaryColor,
          dark: darkPrimary,
          contrastText: '#fff',
        },
        secondary: {
          light: lightSecondary,
          main: secondaryColor,
          dark: darkSecondary,
          contrastText: '#000',
        },
      },
})

export default theme;