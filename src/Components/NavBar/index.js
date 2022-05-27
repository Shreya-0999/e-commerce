import * as React from 'react';
import { connect } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, Badge } from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';

const settings = ['Profile', 'Order History', 'Logout'];

const NavBar = (props) => {

    const navigate = useNavigate();
    console.log(props.cartItems)
    // const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleNavHome = () => {
        navigate('/');
    }
    const handleUserLogin = () => {
        navigate('/Login');
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleCartBtn = () => {
        navigate("/cart")
    }

    const handleCartCount = () => {
        let cartArr = JSON.parse(window.localStorage.getItem('cart'));
        if (cartArr)
            return cartArr.length
        else
            return 0;
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={handleNavHome}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Home
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton sx={{ p: 0, mx: 2 }} onClick={handleCartBtn}>
                            <Badge badgeContent={handleCartCount()} color="secondary">
                                <ShoppingCartRoundedIcon fontSize="medium" style={{ color: 'white' }} />
                            </Badge>
                        </IconButton>
                        <IconButton sx={{ p: 0, mx: 2 }} onClick={handleCartBtn}>
                            <Badge  color="secondary">
                                <FavoriteIcon fontSize="medium" style={{ color: 'white' }} />
                            </Badge>
                        </IconButton>
                        {
                            props.currentUser ?
                                (
                                    <>
                                        <Tooltip title="Open settings">
                                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                <PersonRoundedIcon fontSize="medium" style={{ color: 'white' }} />
                                            </IconButton>
                                        </Tooltip>
                                        <Menu
                                            sx={{ mt: '45px' }}
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
                                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                    <Typography textAlign="center">{setting}</Typography>
                                                </MenuItem>
                                            ))}
                                        </Menu>

                                    </>
                                )
                                : (
                                    <IconButton onClick={handleUserLogin} sx={{ p: 0 }}>
                                        <PersonRoundedIcon fontSize="medium" style={{ color: 'white' }} />
                                    </IconButton>
                                )
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
const mapStateToProps = ({ user, cart }) => {
    return {
        currentUser: user.currentUser,
        cartItems: cart.cartItems
    }
}
export default connect(mapStateToProps)(NavBar);

