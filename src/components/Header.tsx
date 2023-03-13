import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { AppBar, Badge, Box, SxProps, Theme, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import adminIcon from '../../public/icons/adminIcon.png'
import { CartContext } from '../contexts/CartContext'

function Header() {
  const { itemCount } = useContext(CartContext)
  return (
    <AppBar sx={headerStyleSx}>
      <Typography sx={typographyStylesSX} variant='h4'>
        Gent's Hat
      </Typography>
      <Box sx={iconWrapperStylesSX}>
        <NavLink to=''>
          <img src={adminIcon} />
        </NavLink>
        <NavLink to='/checkout'>
          <Badge
            sx={badgeStylesSX}
            badgeContent={<Typography variant='body2'>{itemCount}</Typography>}
            showZero
            color='success'
            data-cy='cart-items-count-badge'
          >
            <ShoppingCartIcon sx={iconStylesSX} data-cy='cart-link' />
          </Badge>
        </NavLink>
      </Box>
    </AppBar>
  )
}

const typographyStylesSX: SxProps<Theme> = theme => ({
  fontSize: '40px',
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
  alignItems: 'baseline',
  padding: '0 10px',
  position: 'static',
  borderBottom: '5px solid #DAB90C',
  // boxShadow: 'none',
  [theme.breakpoints.down('md')]: {
    padding: '0 5px',
    [theme.breakpoints.down('sm')]: {
      padding: '0 2px',
    },
  },
})

const iconWrapperStylesSX: SxProps<Theme> = theme => ({
  display: 'flex',
  padding: '10px',
  alignItems: 'baseline',
  gap: '10px',
  '& img': {
    margin: '0 0 -15px 0',
  },
  [theme.breakpoints.down('md')]: {
    '& img': {
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
    height: '22px',
    fontSize: '18px',
    [theme.breakpoints.down('md')]: {
      scale: '0.8',
      [theme.breakpoints.down('sm')]: {
        scale: '0.6',
      },
    },
  },
})

export default Header
