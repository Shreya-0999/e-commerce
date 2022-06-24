import { Grid, Modal, Box } from '@mui/material';
import TextField from '../TextField';
import ButtonC from '../Button';
import { useState } from 'react';
import useStyles from './Styles/useStyle'

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

const AddressModal = (props) => {
  const classes = useStyles();
  const [fullName, setFullName] = useState();
  const [mobileNo, setMobileNo] = useState();
  const [locality, setLocality] = useState();
  const [pincode, setPincode] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [validation, setValidation] = useState(false);
  const handleClose = () => {
    props.handleOpen(false);
    setValidation(false);
  }

  const handleSave = () => {
    if (fullName && mobileNo && locality && pincode && city && state) {
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
      props.setAddress(user.address);
      handleClose();
    }
    else
      setValidation(true);
  }
  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal}>
          <h1 className={classes.pageHeading}>Add Address</h1>
          <p className={classes.underline}></p>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField type={'Full Name'} value={fullName} setFunc={setFullName} />
            </Grid>
            <Grid item xs={12}>
              <TextField type={'Locality'} value={locality} setFunc={setLocality} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField type={'Pincode'} value={pincode} setFunc={setPincode} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField type={'Mobile No'} value={mobileNo} setFunc={setMobileNo} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField type={'City'} value={city} setFunc={setCity} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField type={'State'} value={state} setFunc={setState} />
            </Grid>
          </Grid>
          {
            validation
              ? <p className={classes.error}>Fill all the fields</p>
              : <></>
          }
          <div className={classes.margin}>
            <ButtonC
              text='Close'
              handleBtnClick={handleClose}
              variant='outlined'
              color='primary'
            />
            <ButtonC
              text='Save'
              handleBtnClick={handleSave}
              variant='contained'
              color='primary'
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default AddressModal;
