import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import PropTypes from 'prop-types';
import { AppBar, Box, IconButton, Badge, Toolbar, Drawer, List, ListItem, ListItemText, CssBaseline } from '@mui/material';
import SearchInput from './SearchInput';
import MyAvatar from './MyAvatar';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { DashboardIcon, DashboardOnClickIcon, ClientListIcon, NannyListIcon, ChildActivityIcon, UserProfileIcon, ClientListOnClickIcon, NannyListOnClickIcon, ChildActivityOnClickIcon, UserProfileOnClickIcon } from './DashboardIcons';
import mainLogo from './assets/hi-parents.png';

const drawerWidth = 290;

function Layout(props) {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname);

  const getWindowWidth = window.innerWidth;
  const minimumWindow = 600;

  const variant = getWindowWidth <= minimumWindow;
  console.log(variant);

  const { windows } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const container = windows !== undefined ? () => windows().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const decoded = jwt_decode(localStorage.getItem('token'));

  const drawerNanny = [
    {
      label: 'Dashboard',
      icon: <DashboardIcon />,
      iconOnclick: <DashboardOnClickIcon />,
      path: '/dashboard/nannydashboard',
    },
    {
      label: 'Client List',
      icon: <ClientListIcon />,
      iconOnclick: <ClientListOnClickIcon />,
      path: '/dashboard/clientlist',
    },
    {
      label: 'Nanny List',
      icon: <NannyListIcon />,
      iconOnclick: <NannyListOnClickIcon />,
      path: '/dashboard/nannylist',
    },
    {
      label: 'Child Activity',
      icon: <ChildActivityIcon />,
      iconOnclick: <ChildActivityOnClickIcon />,
      path: '/dashboard/childactivity',
    },
    {
      label: 'User Profile',
      icon: <UserProfileIcon />,
      iconOnclick: <UserProfileOnClickIcon />,
      path: '/dashboard/userprofilenanny',
    },
  ];

  const drawerParent = [
    {
      label: 'Child Activity',
      icon: <ChildActivityIcon />,
      iconOnclick: <ChildActivityOnClickIcon />,
      path: '/dashboard/activityparent',
    },
    {
      label: 'User Profile',
      icon: <UserProfileIcon />,
      iconOnclick: <UserProfileOnClickIcon />,
      path: '/dashboard/profileparent',
    },
  ];

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#FCFCFC' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={mobileOpen}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: '5rem',
          ml: { sm: `${drawerWidth}px` },
          background: 'white',
          boxShadow: 'none',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            color="default"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: '0.125rem',
              display: { sm: 'none' },
            }}
          >
            <MenuIcon />
          </IconButton>
          <SearchInput />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              paddingRight: '2rem',
            }}
          >
            <IconButton
              aria-label="notification"
              size="large"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#F77979',
              }}
            >
              <Badge overlap="circular" variant="dot" badgeContent={5} color="warning">
                <NotificationsIcon fontSize="inherit" />
              </Badge>
            </IconButton>
            <span
              className="divider"
              style={{
                borderWidth: '0.0625rem',
                borderStyle: 'solid',
                borderColor: '#768471',
              }}
            ></span>
            <MyAvatar userName={decoded.name} avatar={decoded.name} />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant={variant ? 'temporary' : 'permanent'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <img
            src={mainLogo}
            alt="icons"
            style={{
              height: '2.6125rem',
              width: '12.1875rem',
              marginTop: '2.5rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '2.5rem',
            }}
          />
          <List sx={{ width: '15.6875rem', marginRight: 'auto', marginLeft: 'auto', color: '#768471' }}>
            {(decoded.role !== 'Nanny' ? drawerParent : drawerNanny).map((item) => (
              <ListItem
                button
                key={item.label}
                onClick={() => navigate(item.path)}
                sx={
                  location.pathname === item.path
                    ? {
                        color: 'white',
                        backgroundColor: '#F67979',
                        height: '3.4375rem',
                        borderRadius: '0.75rem',
                        marginBottom: '1rem',
                      }
                    : {
                        height: '3.4375rem',
                        borderRadius: '0.75rem',
                        marginBottom: '1rem',
                      }
                }
              >
                <ListItem sx={{ width: 'fit-content' }}>{location.pathname === item.path ? item.iconOnclick : item.icon}</ListItem>
                <ListItemText primary={item.label} />
                <ArrowForwardIosIcon />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;
