import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Popover } from '@mui/material';
import { ActionIcon } from './ActionIcon';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';

const ActionButton = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleManageChild = () => {
    navigate(`/dashboard/managenanny`);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <ActionIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '13.25rem',
            height: '4rem',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#FCFCFC',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: '13.25rem',
              height: '3.5rem',
            }}
            onClick={(e) => {
              e.preventDefault();
              handleManageChild();
            }}
            // id={}
          >
            <InfoOutlinedIcon sx={{ marginRight: '0.5rem' }} />
            <Typography /*onClick={handleManageChild}*/>Manage Child</Typography>
          </Box>
        </Box>
      </Popover>
    </div>
  );
};

export default ActionButton;
