import * as React from 'react';
import { connect } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { logoutStart } from '../../Core/Actions/userActions'
import { Toolbar, IconButton, Menu, Container, Button, Tooltip, MenuItem, Badge } from '@mui/material';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useNavigate } from 'react-router-dom';
import useStyle from './Styles/useStyle';

const settings = ['Order History', 'Logout'];

const NavBar = (props) => {
    const navigate = useNavigate();
    const classes = useStyle();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleNavHome = () => {
        navigate('/');
    }
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleUserLogin = () => {
        navigate('/Login');
    }

    const handleCloseUserMenu = (e) => {
        if (e.target.innerHTML === 'Order History') {
            navigate('/orderHistory');
        }
        else if (e.target.innerHTML === 'Logout') {
            props.logoutStart();
        }
        setAnchorElUser(null);
    };

    const handleCartBtn = () => {
        navigate("/cart")
    }

    const handleCartCount = () => {
        let activeUser = JSON.parse(window.localStorage.getItem('activeUser'));
        if (activeUser && activeUser.cart)
            return activeUser.cart.length
        else
            return 0;
    }
    const handleWishlistBtn = () => {
        navigate('/wishlist');
    }
    return (
        <AppBar position="static" className={classes.appBar} >
            <Container className={classes.container}>
                <Toolbar disableGutters>
                    <h3 className={classes.logo}>E-SHOP</h3>
                    <Box className={classes.navItemsBox}>
                        <Button
                            className={classes.navItem}
                            onClick={handleNavHome}
                            color='secondary'
                            variant='text'
                            sx={{ my: 2, display: 'block' }}
                        >
                            Home
                        </Button>
                    </Box>

                    <Box className={classes.iconBtnBox}>
                        <IconButton sx={{ p: 0, mx: 1 }} onClick={handleCartBtn}>
                            <Badge badgeContent={handleCartCount()}>
                                <ShoppingCartOutlinedIcon fontSize="medium" color="secondary" />
                            </Badge>
                        </IconButton>
                        <IconButton sx={{ p: 0, mx: 2 }} onClick={handleWishlistBtn}>
                            <FavoriteBorderOutlinedIcon fontSize="medium" color="secondary" />
                        </IconButton>
                        {
                            props.currentUser ?
                                (
                                    <>
                                        <Tooltip title="Open settings">
                                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mx: 1 }}>
                                                <PersonOutlinedIcon fontSize="medium" color="secondary" />
                                            </IconButton>
                                        </Tooltip>
                                        <Menu
                                            className={classes.menuItemBox}
                                            id="menu-appbar"
                                            anchorEl={anchorElUser}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={Boolean(anchorElUser)}
                                            onClose={handleCloseUserMenu}
                                        >
                                            {settings.map((setting) => (
                                                <MenuItem key={setting} onClick={(e) => handleCloseUserMenu(e)}>
                                                    <p className={classes.menuItems}>{setting}</p>
                                                </MenuItem>
                                            ))}
                                        </Menu>

                                    </>
                                )
                                : (
                                    <IconButton onClick={handleUserLogin} sx={{ p: 0 }}>
                                        <PersonOutlinedIcon fontSize="medium" color="secondary" />
                                    </IconButton>
                                )
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
const mapStateToProps = ({ user, cart, wishlist }) => {
    return {
        currentUser: user.currentUser,
        cartItems: cart.cartItems,
        wishlistItems: wishlist.wishlistItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logoutStart: () => dispatch(logoutStart())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

