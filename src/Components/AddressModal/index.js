import * as React from 'react';
import { Grid, Modal, Box } from '@mui/material';
import TextField from '../TextField';
import ButtonC from '../Button';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddressModal = (props) => {
  const [fullName, setFullName] = useState();
  const [mobileNo, setMobileNo] = useState();
  const [locality, setLocality] = useState();
  const [pincode, setPincode] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  // const handleOpenModal = () => props.handleOpen(true);
  const handleClose = () => props.handleOpen(false);

  const handleSave=()=>{
    let user = JSON.parse(localStorage.getItem('user'));
    user.address = {
      FullName: fullName,
      MobileNo: mobileNo,
      Locality: locality,
      Pincode: pincode,
      City: city,
      State: state
    }
    localStorage.setItem('user', JSON.stringify(user));
    handleClose();
  }
  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>Add Address</h2>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField type={'Full Name'} value={fullName} setFunc={setFullName}/>
            </Grid>
            <Grid item xs={12}>
              <TextField type={'Locality'} value={locality} setFunc={setLocality}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField type={'Pincode'} value={pincode} setFunc={setPincode}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField type={'Mobile No'} value={mobileNo} setFunc={setMobileNo}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField type={'City'} value={city} setFunc={setCity}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField type={'State'} value={state} setFunc={setState}/>
            </Grid>
          </Grid>
          <ButtonC text='Close' handleBtnClick={handleClose} />
          <ButtonC text='Save' handleBtnClick={handleSave} />
        </Box>
      </Modal>
    </div>
  );
}
export default AddressModal;
