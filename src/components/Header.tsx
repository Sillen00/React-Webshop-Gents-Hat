import * as Icon from '@mui/icons-material'
import { AppBar, Badge, Box, SxProps, Theme, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import adminIcon from '../../public/icons/adminIcon.png'
import { useCart } from '../contexts/CartContext'
import '../index.css'

function Header() {
  const { totalProductsInCart } = useCart()
  return (
    <AppBar sx={headerStyleSx}>
      <NavLink style={{ marginTop: '5px', color: 'white', textDecoration: 'none' }} to='/'>
        <Typography sx={typographyStylesSX} variant='h4'>
          Gent's Hat
        </Typography>
      </NavLink>
      <Box sx={iconWrapperStylesSX}>
        <NavLink to='/confirmation'>
          <img src={adminIcon} />
        </NavLink>
        <NavLink to='/checkout'>
          <Badge
            sx={badgeStylesSX}
            badgeContent={<Typography variant='body2'>{totalProductsInCart}</Typography>}
            showZero
            color='success'
            data-cy='cart-items-count-badge'
          >
            <Icon.ShoppingCart sx={iconStylesSX} data-cy='cart-link' />
          </Badge>
        </NavLink>
      </Box>
    </AppBar>
  )
}

const typographyStylesSX: SxProps<Theme> = theme => ({
  fontSize: '40px',
  justifyContent: 'center',
  marginLeft: '2rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '25px',
  },
})

const headerStyleSx: SxProps<Theme> = theme => ({
  backgroundColor: 'black',
  color: 'white',
  display: 'flex',
  height: 'var(--header-height-xl)',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',
  borderBottom: '5px solid #DAB90C',
  [theme.breakpoints.down('md')]: {
    height: 'var(--header-height-md)',
  },
  [theme.breakpoints.down('sm')]: {
    height: 'var(--header-height-sm)',
  },
})
// Todo, länka till home när man klickar på Loggan
const iconWrapperStylesSX: SxProps<Theme> = theme => ({
  display: 'flex',
  margin: '1rem',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.down('md')]: {
    '& img': {
      width: '46px',
      paddingTop: '2px',
    },
  },
  [theme.breakpoints.down('sm')]: {
    '& img': {
      width: '40px',
      paddingTop: '3px',
    },
  },
})

const iconStylesSX: SxProps<Theme> = theme => ({
  fontSize: '46px',
  color: 'white',
  position: 'relative',
  top: '2px',
  [theme.breakpoints.down('md')]: {
    fontSize: '40px',
    top: '3px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '35px',
    top: '3px',
  },
})

const badgeStylesSX: SxProps<Theme> = theme => ({
  '& .MuiBadge-badge': {
    color: 'white',
    right: '10px',
    top: '10px',
    [theme.breakpoints.down('md')]: {
      scale: '0.8',
      right: '5px',
    },
  },
})

export default Header
