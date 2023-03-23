import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  SxProps,
  Theme,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { products } from '../../data'
import AdminCardProduct from '../components/AdminCardProduct'
import AdminProductForm from '../components/AdminProductForm'

function Admin() {
  const [open, setOpen] = useState(false)
  const [dataProducts, setDataProducts] = useState(products)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>EDIT / ADD PRODUCT</DialogTitle>
        <DialogContent>
          <DialogContentText>Id</DialogContentText>
          <AdminProductForm
            dataProducts={dataProducts}
            setDataProducts={setDataProducts}
            handleClose={handleClose}
          />
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>

      <Box sx={adminPageContainerSx}>
        <Box sx={productContainerSx}>
          <Box sx={headerSx}>
            <Typography variant={'h3'}>Admin</Typography>
            <Button data-cy="admin-add-product" sx={{height: '40px'}} onClick={handleClickOpen} variant='contained'>
              <Typography variant={'body2'}>Add New Product</Typography>
            </Button>
          </Box>
          <Grid sx={AdminCardListSx} container rowSpacing={5}>
            {dataProducts.map(dataProduct => (
              <Grid
                key={dataProduct.id}
                sx={AdminCardListSx}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
              >
                <AdminCardProduct dataProduct={dataProduct} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  )
}

const ModalBoxStyleSx: SxProps<Theme> = theme => ({
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '20em',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
})

const headerSx: SxProps<Theme> = theme => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  mb: '2rem',
  pr: '2.3rem',
  [theme.breakpoints.down('lg')]: {
    pr: '2.6rem',
  },
  [theme.breakpoints.down('md')]: {
    pr: '2.75rem',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    height: '8rem',
    width: '100%',
    pr: '0rem',
  },
})

const AdminCardListSx: SxProps<Theme> = theme => ({
  display: 'flex',
})

const adminPageContainerSx: SxProps<Theme> = theme => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
})

const productContainerSx: SxProps<Theme> = theme => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '1140px',
  paddingLeft: '2rem',
  [theme.breakpoints.down('lg')]: {
    width: '880px',
    paddingLeft: '2.2rem',
  },
  [theme.breakpoints.down('md')]: {
    width: '610px',
    paddingLeft: '2.6rem',
  },
  [theme.breakpoints.down('sm')]: {
    width: '242px',
    paddingLeft: '0rem',
  },
})

export default Admin
