import * as React from 'react';
import { Box, Avatar, Popover, Typography, Button } from '@mui/material';

export default function MyAvatar({ userName, avatar }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleLogOut = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  const handleChangePass = () => {
    window.location.href = '/dashboard/changepassword';
  };

  const handleClick = (event) => {
    if (anchorEl !== null) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleCloseAvatar = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box
      onClick={handleClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography sx={{ color: '#2F2F33', marginLeft: '1.5rem', marginRight: '1.5rem' }}>
        {userName}
      </Typography>
      <Avatar alt='Remy Sharp' src={avatar} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseAvatar}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
        }}
      >
        <Box>
          <Button
            sx={{ p: 2, color: '#2F2F33', textTransform: 'unset' }}
            onClick={handleChangePass}
          >
            Change Password
          </Button>
        </Box>
        <Box>
          <Button
            fullWidth
            sx={{
              p: 2,
              color: '#2F2F33',
              textTransform: 'unset',
              display: 'flex',
              justifyContent: 'start',
            }}
            onClick={handleLogOut}
          >
            Sign Out
          </Button>
        </Box>
      </Popover>
    </Box>
  );
}
