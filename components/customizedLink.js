import Link from 'next/link'
import { Link as MuiLink } from '@mui/material'

export default function CustomizedLink({ children, href, title, classes }) {
  return (
    <Link href={href}>
      <MuiLink
        title={title}
        className={classes}
        sx={{ cursor: 'pointer' }}
      >
        {children}
      </MuiLink>
    </Link>
  )
}