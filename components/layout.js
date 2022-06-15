import Head from 'next/head'
import CustomizedLink from '../components/link'

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import LiveTvIcon from '@mui/icons-material/LiveTv'

export const siteTitle = 'Must-Watch Movies'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header>
        <AppBar position='static' color='transparent'>
          <Toolbar sx={{ mx: 5 }}>
            <CustomizedLink href='/' title='Acessar página principal'>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LiveTvIcon fontSize='large' />
                <Typography sx={{ m: 2, fontSize: '1.5rem' }}>
                  {siteTitle}
                </Typography>
              </Box>
            </CustomizedLink>
          </Toolbar>
        </AppBar>
      </header>

      <main>{children}</main>
    </>
  )
}
