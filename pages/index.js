import Head from 'next/head'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

import Layout, { siteTitle } from '../components/layout'
import MovieCard from '../components/movieCard'
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
              <Grid item key={title} md={6} lg={2}>
                <MovieCard title={title} img={img} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <span>Nenhum filme cadastrado ainda :(</span>
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