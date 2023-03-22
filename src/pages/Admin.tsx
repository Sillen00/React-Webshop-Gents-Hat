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

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '2rem' }}>
        <Typography variant={'h3'}>Admin</Typography>
        <Button onClick={handleClickOpen} variant='contained'>
          <Typography variant={'body2'}>Add New Product</Typography>
        </Button>
      </Box>

      <Grid sx={AdminCardListSx} container rowSpacing={5}>
        {dataProducts.map(dataProduct => (
          <Grid key={dataProduct.id} sx={AdminCardListSx} item xs={12} sm={6} md={4} lg={3} xl={3}>
            <AdminCardProduct dataProduct={dataProduct} />
          </Grid>
        ))}
      </Grid>
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

const AdminCardListSx: SxProps<Theme> = theme => ({
  display: 'flex',
  justifyContent: 'center',
})

export default Admin
