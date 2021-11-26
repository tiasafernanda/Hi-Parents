import * as React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, IconButton, Avatar, Typography, Toolbar, Drawer, List, ListItem, ListItemText, CssBaseline } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { DashboardIcon, ClientListIcon, NannyListIcon, ChildActivityIcon, UserProfileIcon } from './DashboardIcons';
import mainLogo from './assets/hi-parents.png';
import SearchInput from './SearchInput';

const drawerWidth = 290;

function Layout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List sx={{ width: '15.6875rem', marginRight: 'auto', marginLeft: 'auto', color: '#768471' }}>
        {['Dashboard', 'Client List', 'Nanny List', 'Child Activity', 'User Profile'].map((text, index) => (
          <ListItem button key={text} sx={{ height: '3.4375rem', borderRadius: '0.75rem', marginBottom: '1rem' }}>
            <ListItem sx={{ width: 'fit-content' }}>
              {index % 5 === 0 ? <DashboardIcon /> : index % 4 === 0 ? <UserProfileIcon /> : index % 3 === 0 ? <ChildActivityIcon /> : index % 2 === 0 ? <NannyListIcon /> : index % 1 === 0 ? <ClientListIcon /> : null}
            </ListItem>
            <ListItemText primary={text} />
            <ArrowForwardIosIcon />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#FCFCFC' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, height: '5.0625rem', ml: { sm: `${drawerWidth}px` }, background: 'white', boxShadow: 'none', display: 'flex', justifyContent: 'center' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton color="default" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: '0.125rem', display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <SearchInput />
          <Box sx={{ display: 'flex', flexDirection: 'row', paddingRight: '2rem' }}>
            <IconButton aria-label="notification" size="large" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <NotificationsIcon fontSize="inherit" />
            </IconButton>
            <span className="divider" style={{ borderWidth: '0.0625rem', borderStyle: 'solid', borderColor: '#768471' }}></span>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
          <img src={mainLogo} alt="icons" style={{ height: '2.6125rem', width: '12.1875rem', marginTop: '2.5rem', marginLeft: 'auto', marginRight: 'auto' }} />

          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        {/*} <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.
          Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est
          ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At
          augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida
          rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo
          viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>*/}
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
