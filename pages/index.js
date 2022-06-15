import Head from 'next/head'
import Image from 'next/image'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import Layout, { siteTitle } from '../components/layout'
import CustomizedLink from '../components/link'
import { getMoviesData } from '../lib/movies'

export default function Home({ moviesData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Container maxWidth={false} sx={{ p: 3 }}>
        { moviesData.length ? (
          <Grid container alignItems='stretch' spacing={3}>
            { moviesData?.map(({ title, img }) => (
              <Grid item md={6} lg={2}>
                {/* TODO: pagina interna de filme */}
                <CustomizedLink href='/' title='Acessar página do filme'>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${img}`}
                    alt='Imagem do filme'
                    width={400}
                    height={600}
                  />
                  <Typography align='center' >
                    {title}
                  </Typography>
                </CustomizedLink>
              </Grid>
            ))}
          </Grid>
        ) : (
          <span>Nenhum filme cadastrados ainda :(</span>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const moviesData = await getMoviesData();
  return {
    props: {
      moviesData
    }
  };
}