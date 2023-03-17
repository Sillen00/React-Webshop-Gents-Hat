import * as Icon from '@mui/icons-material'
import { AppBar, Badge, Box, SxProps, Theme, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import adminIcon from '../../public/icons/adminIcon.png'
import { useCart } from '../contexts/CartContext'

function Header() {
  const { totalProductsInCart } = useCart()
  return (
    <AppBar sx={headerStyleSx}>
      <NavLink style={{ marginTop: '5px', color: 'white', textDecoration: 'none' }} to='/'>
        <Typography sx={typographyStylesSX} variant='h4'>
          Gent's Hats
        </Typography>
      </NavLink>
      <Box sx={iconWrapperStylesSX}>
        <NavLink to=''>
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
  marginLeft: '10px',
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
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  // padding: '0 10px',
  position: 'static',
  borderBottom: '5px solid #DAB90C',
  [theme.breakpoints.down('md')]: {
    padding: '0 5px',
    [theme.breakpoints.down('sm')]: {
      padding: '0 2px',
    },
  },
})
// Todo, länka till home när man klickar på Loggan
const iconWrapperStylesSX: SxProps<Theme> = theme => ({
  display: 'flex',
  margin: '10px',
  alignItems: 'baseline',
  gap: '10px',
  '& img': {
    margin: '0 0 -15px 0',
  },
  [theme.breakpoints.down('md')]: {
    '& img': {
      marginLeft: '20px',
      width: '30px',
      [theme.breakpoints.down('sm')]: {
        width: '25px',
      },
    },
  },
})

const iconStylesSX: SxProps<Theme> = theme => ({
  fontSize: '40px',
  color: 'white',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    fontSize: '30px',
    top: '3px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px',
      top: '5px',
    },
  },
})

const badgeStylesSX: SxProps<Theme> = theme => ({
  '& .MuiBadge-badge': {
    color: 'white',
    right: '10px',
    top: '10px',
    fontSize: '15px',
    [theme.breakpoints.down('md')]: {
      scale: '0.8',
      right: '5px',
      [theme.breakpoints.down('sm')]: {
        scale: '0.6',
        right: '5px',
      },
    },
  },
})

export default Header
