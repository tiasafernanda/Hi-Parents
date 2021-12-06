import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Box, IconButton, Badge, Avatar, Typography, Toolbar, Drawer, List, ListItem, ListItemText, CssBaseline } from '@mui/material';
import SearchInput from './SearchInput';
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

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerComponent = [
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
      path: '/dashboard/userprofile',
    },
  ];

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#FCFCFC' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
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
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography sx={{ color: '#2F2F33', marginLeft: '1.5rem', marginRight: '1.5rem' }}>Super Sayan Vegeta</Typography>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="permanent"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            boxShadow: 'initial',
          }}
          open
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
            {drawerComponent.map((item) => (
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
