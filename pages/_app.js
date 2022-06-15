import * as React from 'react'
import '../styles/global.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const defaultTheme = createTheme({
  palette: {
    type: 'light',
    primary:    { main:    '#8083ff' },
    secondary:  { main:    '#ffa3a3' },
    background: { default: '#ebebeb' },
    text:       { primary: '#474649' },
  }
})

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
