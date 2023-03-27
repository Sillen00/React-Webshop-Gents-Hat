import * as Icon from '@mui/icons-material'
import { AppBar, Badge, Box, SxProps, Theme, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import adminIcon from '../icons/adminIcon.png'
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
        <NavLink data-cy='admin-link' to='/admin'>
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
            <Box sx={badgeBoxStylesSX}>
              <Icon.ShoppingBagOutlined sx={iconStylesSX} data-cy='cart-link' />
            </Box>
          </Badge>
        </NavLink>
      </Box>
    </AppBar>
  )
}

const badgeBoxStylesSX: SxProps<Theme> = theme => ({
  '::before': {
    content: "''",
    position: 'absolute',
    top: "42%",
    left: "30%",
    border: '0.35em solid white',
    borderRadius: '9999rem',
  },
  '::after': {
    content: "''",
    position: 'absolute',
    top: "42%",
    left: "55%",
    border: '0.35em solid white',
    borderRadius: '9999rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '12px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '10px',
  },
  
})

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
  mr: '1rem',
  alignItems: 'center',
  gap: '10px',
  "& img": {
    width: '70px',
  },
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
  fontSize: '66px',
  color: 'white',
  position: 'relative',
  top: '3px',
  [theme.breakpoints.down('md')]: {
    fontSize: '44px',
    top: '3px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '35px',
    top: '4px',
  },
})

const badgeStylesSX: SxProps<Theme> = theme => ({
  '& .MuiBadge-badge': {
    color: 'white',
    right: '8px',
    top: '17px',
    [theme.breakpoints.down('md')]: {
      scale: '0.8',
      right: '4px',
      top: '11px',
    },
    [theme.breakpoints.down('sm')]: {
      right: '2px',
    },
  },
})

export default Header
