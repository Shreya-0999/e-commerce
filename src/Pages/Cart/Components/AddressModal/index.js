import { Grid, Modal, Box } from '@mui/material';
import TextField from '../../../../Components/TextField';
import ButtonC from '../../../../Components/Button';
import { useState } from 'react';
import useStyles from './Styles/useStyle';
import constants from './Utils/constants'

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
      let activeUser = JSON.parse(localStorage.getItem('activeUser'));
      activeUser.address = {
        FullName: fullName,
        MobileNo: mobileNo,
        Locality: locality,
        Pincode: pincode,
        City: city,
        State: state
      }
      localStorage.setItem('activeUser', JSON.stringify(activeUser));
      props.setAddress(activeUser.address);
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
          <h1 className={classes.pageHeading}>{constants.ADD_ADDRESS}</h1>
          <p className={classes.underline}></p>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField type={'Full Name'} value={fullName} setFunc={setFullName} margin = '0.2rem 0'/>
            </Grid>
            <Grid item xs={12}>
              <TextField type={'Locality'} value={locality} setFunc={setLocality} margin = '0.2rem 0'/>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField type={'Pincode'} value={pincode} setFunc={setPincode} margin = '0.2rem 0'/>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField type={'Mobile No'} value={mobileNo} setFunc={setMobileNo} margin = '0.2rem 0'/>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField type={'City'} value={city} setFunc={setCity} margin = '0.2rem 0'/>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField type={'State'} value={state} setFunc={setState} margin = '0.2rem 0'/>
            </Grid>
          </Grid>
          {
            validation
              ? <p className={classes.error}>{constants.ERROR_MSG}</p>
              : <></>
          }
          <div className={classes.margin}>
            <ButtonC
              text='Close'
              handleBtnClick={handleClose}
              variant='outlined'
              color='secondary'
            />
            <ButtonC
              text='Save'
              handleBtnClick={handleSave}
              variant='contained'
              color='secondary'
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default AddressModal;
