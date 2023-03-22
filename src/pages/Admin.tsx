import { Box, Button, Grid, Modal, SxProps, Theme, Typography } from '@mui/material'
import { useState } from 'react'
import { products } from '../../data'
import AdminCardProduct from '../components/AdminCardProduct'
import AdminTextFields from '../components/AdminTextFields'

function Admin() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Grid sx={AdminCardListSx} container rowSpacing={5}>
            <Grid sx={AdminCardListSx} item xs={12} sm={6} md={4} lg={3} xl={3}>
              <AdminTextFields />
            </Grid>
          </Grid>
        </Box>
      </Modal>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '2rem' }}>
        <Typography variant={'h3'}>Admin</Typography>
        <Button onClick={handleOpen} variant='contained'>
          <Typography variant={'body2'}>Add New Product</Typography>
        </Button>
      </Box>

      <Grid sx={AdminCardListSx} container rowSpacing={5}>
        {products.map(product => (
          <>
            <Grid sx={AdminCardListSx} item xs={12} sm={6} md={4} lg={3} xl={3}>
              <AdminCardProduct product={product} key={product.id} />
            </Grid>
          </>
        ))}
      </Grid>
    </>
  )
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '20em',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const AdminCardListSx: SxProps<Theme> = theme => ({
  display: 'flex',
  justifyContent: 'center',
})

export default Admin
