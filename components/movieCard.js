import Image from 'next/image'
import Typography from '@mui/material/Typography'
import CustomizedLink from './customizedLink'

export default function MovieCard({ title, img }) {
  return (
    <CustomizedLink href='/' title={`Acessar detalhes do filme ${title}`}>
      {/* TODO: pagina interna de filme */}
        <Image
          src={`https://image.tmdb.org/t/p/w500${img}`}
          alt={title}
          className='border-radius-15'
          width={400}
          height={600}
        />
      <Typography align='center'>
        {title}
      </Typography>
    </CustomizedLink>
  )
}

