import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link} from 'react-router-dom';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import CollectionsIcon from '@mui/icons-material/Collections';
import "./Dashboard.css";
import { Button } from '@mui/material';
import skincarelogo from '../../../assets/skinbacrem.png'
import { useNavigate } from "react-router-dom";



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);




export default function Dashboard1() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate(); // ✅ Correctly defining useNavigate inside the component
 const handleNavigate = () => {
    navigate('/'); 
  };

  return (
    <Box className='dashboard-container'>
      <CssBaseline />

      <AppBar position="fixed" open={open} className='dashboard-App'>

      <Toolbar  className=' Toolbar-1'>

      <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={`dash-icon-button ${open ? "hidden" : ""}`}  // Add "menu-open" class dynamically
        >
          <MenuIcon className="dash-menu-icon" />
        </IconButton>


      
       <img src={skincarelogo} alt="Skin care Logo" className='skinlogo' />

       <Typography
          variant="h6"
          noWrap
          component="div" className='Skin-Header'
          sx={{
            flexGrow: 2,
            textAlign: { xs: 'center', sm: 'left' }, 
          }}
        >
      Skin Care
    </Typography>


    <Box className="skin-right-container">
      <Button onClick={handleNavigate} className="nav-button">Logout</Button>
    </Box>

   </Toolbar>
      </AppBar>


       <Drawer variant="permanent" open={open} sx={{
      '& .MuiDrawer-paper': {
        backgroundColor: '#f3408ec7', 
        color: 'black',
      },}}>
  <DrawerHeader>
    <IconButton onClick={handleDrawerClose}>
      {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
    </IconButton>
  </DrawerHeader>

  <Divider />

  <List className='drawer'>
  {['Dashboard', 'Find-My-Skin'].map((text, index) => (
    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
      {/* Link for Dashboard and View-Registered */}
      <Link to={index === 0 ? "/dashboard" : "/find-skin-product"} style={{ textDecoration: 'none' }}>
        <ListItemButton
          sx={[
            { minHeight: 48, px: 2.5 },
            open ? { justifyContent: 'initial' } : { justifyContent: 'center' },
          ]}
        >
          <ListItemIcon
            sx={[
              { minWidth: 0, justifyContent: 'center' },
              open ? { mr: 3 } : { mr: 'auto' },
            ]}
          >
            {index === 0 ? (
              <
              AddHomeWorkIcon
                style={{ width: '30px', height: '26px',color:'white' }}
              />
            ) : (
              <ManageSearchIcon
                style={{ width: '30px', height: '36px',color:'white' }}
              />
            )}
          </ListItemIcon>
          <ListItemText
            primary={text}
            sx={[
              { color: 'white', opacity: open ? 1 : 0 }, // Text will be white
              index === 1 && { marginLeft: open ? '0' : '8px' }, // Adjust margin for View-Registered
            ]}
          />
        </ListItemButton>
      </Link>
    </ListItem>
  ))}
</List>


  <List className='drawer'>
  {['Product-Gallery'].map((text, index) => (
    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
      {/* Link for Payment History and Logout */}
      <Link to={index === 0 ? "/product-gallery" : "/logout" } style={{ textDecoration: 'none' }}>
        <ListItemButton
          sx={[
            { minHeight: 48, px: 2.5 },
            open ? { justifyContent: 'initial' } : { justifyContent: 'center' },
          ]}
        >
          <ListItemIcon
            sx={[
              { minWidth: 0, justifyContent: 'center' },
              open ? { mr: 3 } : { mr: 'auto' },
            ]}
          >
            {index === 0 ? (
              <CollectionsIcon
                style={{ width: '30px', height: '26px',color:'white' }}
              />
            ) : (
              < LogoutIcon 
                sx={{
                  fontSize: open ? '28px' : '25px',color:'white'
                }}
              />
            )}
          </ListItemIcon>
          <ListItemText
            primary={text}
            sx={[
              { color: 'white', opacity: open ? 1 : 0 },
              index === 1 && {
                marginLeft: open ? '0' : '8px',  // Align Logout text closer to the icon
              },
            ]}
          />
        </ListItemButton>
      </Link>
    </ListItem>
  ))}
</List>
</Drawer>

      {/* ----------- */}

   
    </Box>
  );
}
