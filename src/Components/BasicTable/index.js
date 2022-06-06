import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { connect } from 'react-redux';



const BasicTable = (props) => {
  let totalPrice = 0;
  function createData(name, total) {
    return { name, total };
  }


  const calTotalPrice = () => {
    props?.cartItems?.forEach((item) => {
      totalPrice += item.price * item.quantity;
    })
    props?.totalPrice(totalPrice);
    return totalPrice;
  }

  const calDelivery = () => {
    if (totalPrice >= 1000) {
      return 'FREE';
    } else {
      return 70;
    }
  }

  const calSubTotal = () => {
    let delivery = calDelivery();
    if (delivery === 'FREE') {
      return totalPrice;
    }
    else
      return totalPrice + calDelivery();
  }

  const rows = [
    createData('Total Price', calTotalPrice()),
    createData('Delivery', calDelivery()),
    createData('SubTotal', calSubTotal())
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              props?.header?.map((ele) => (
                <TableCell>{ele}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
const mapStateToProps = ({ cart }) => {
  return {
    cartItems: cart.cartItems
  }
}
export default connect(mapStateToProps, null)(BasicTable);