import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../images/logolotus.png';
import { Link as LinkRouter } from "react-router-dom";
import '../css/navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../redux/actions/userActions';
import checkoutActions from '../redux/actions/checkoutActions';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Check from './Check';
import { green, purple } from '@mui/material/colors';

const pages = [{ to: '/home', name: 'inicio' }, { to: '/products', name: 'Productos' }, { to: '/treatments', name: 'Tratamientos' },
{ to: '/contact', name: 'Contacto' }, { to: '/news', name: 'novedades' },{ to: '/about', name: 'nosotros' }];
const settings = [{ to: '/signin', name: 'Iniciar Sesion' }, { to: 'signup', name: 'Registrarse' }];

const NavBar = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.userReducer.user);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const checkout = useSelector((state) => state.checkoutReducer.handleCheckout)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleSignOut = () => {
        dispatch(userActions.signOutUser(user.email))
    }
    function handleCheckout(boolean) {
        dispatch(checkoutActions.handleCheckout(boolean))
    }

    const carrito = useSelector((store) => store.checkoutReducer.carrito)

    return (
        <AppBar style={{ background: '#FFCBD1' }} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <LinkRouter to="/home">
                        <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
                            <img alt="imagen-logo" href="/home" className="img-logo" src={logo} width="60px" />
                        </Box>
                    </LinkRouter>
                    <LinkRouter to="/home">
                        <Typography
                            style={{ fontSize: 25 }}
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontStyle: 'oblique',
                                fontWeight: 700,
                                color: '4B0082',
                                textDecoration: 'none',
                            }}
                        >
                            Aesthethic
                        </Typography>
                    </LinkRouter>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                <LinkRouter key={index} onClick={handleCloseNavMenu} to={page.to}>
                                    <MenuItem >
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                </LinkRouter>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
                        <img alt="imagen-logo" src={logo} width="60px" />
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Aesthethic
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                            <LinkRouter
                                key={index}
                                onClick={handleCloseNavMenu}
                                to={page.to}
                            >
                                <Button className="font-nav"
                                    sx={{ my: 2, color: '#4B0082', display: 'block', fontSize: 20 }}
                                >
                                    {page.name}
                                </Button>
                            </LinkRouter>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                    {carrito.length > 0 ?
                            <AddShoppingCartIcon style={{ cursor: "pointer" }} onClick={() => handleCheckout(true)} sx={{ color: green[500] ,fontSize: 35, mr: 2 }} />
                            :
                            <AddShoppingCartIcon style={{ cursor: "pointer" }} onClick={() => handleCheckout(true)} sx={{ fontSize: 35, mr: 2 }} />
                        }
                        {checkout ? <Check /> : <></>}
                        {/* {user && user.role =='admin'? <></> : <Button className="boton-carrito" onClick={() => dispatch(checkoutActions.addProduct(data))}>Añadir al carrito</Button> } */}
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                {user && <Avatar alt={user.name} src={user.photo} sx={{ color: purple[300]}} />}
                                {!user && <Avatar />}
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
                            {user !== null ? <MenuItem>
                                <Typography onClick={handleSignOut} textAlign="center">Sign Out</Typography>
                            </MenuItem> : settings.map((setting, index) => (
                                <LinkRouter key={index} onClick={handleCloseUserMenu} to={setting.to}>
                                    <MenuItem>
                                        <Typography textAlign="center">{setting.name}</Typography>
                                    </MenuItem>
                                </LinkRouter>
                            ))
                            }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
