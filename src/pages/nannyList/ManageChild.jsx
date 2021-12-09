import * as React from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {
  Box,
  Button,
  Typography,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import styles from './assets/ManageChild.module.scss';
import { Link } from 'react-router-dom';

/*const createData = (props) => {
  return { props };
};*/
const data = ['Yugi Muto', 'Nobitakun'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderWidth: '0.5px',
  borderRadius: '99px',
  borderColor: '#10B278',
  borderStyle: 'solid',
  backgroundColor: 'white',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#787885',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#787885',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: 'black',
    [theme.breakpoints.up('md')]: {
      width: '38ch',
    },
  },
}));

const SearchInput = () => {
  return (
    <>
      <Search sx={{ display: 'flex', alignItems: 'center' }}>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: '#10B278' }} />
        </SearchIconWrapper>
        <StyledInputBase placeholder='Search child list' inputProps={{ 'aria-label': 'search' }} />
      </Search>
    </>
  );
};

export default function ManageChild() {
  return (
    <div className={styles.container}>
      <Box>
        <Link to='/dashboard/nannylist'>
          <Typography sx={{ fontFamily: 'Nunito' }} variant='h4'>
            <BiLeftArrowAlt style={{ position: 'relative', top: '5px' }} /> Manage Child
          </Typography>
        </Link>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '27px' }}>
          <Box sx={{ width: '45rem' }}>
            <Box sx={{ display: 'flex' }}>
              <Typography tx={{ marginRight: '0.75rem' }}>
                Limit Child Nanny Can Manage (6/5)
              </Typography>
              <Typography variant='caption' color='red' tx={{ lineHeight: '2.25px' }}>
                You cannot assign children more than limited number
              </Typography>
            </Box>
            <Box
              sx={{
                borderWidth: '0.5px',
                borderStyle: 'solid',
                borderColor: '#D9D9D9',
                borderRadius: '12px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                }}
              >
                <SearchInput />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography>Select All</Typography>
                  <CheckBoxIcon
                    sx={{ height: '4.5rem', marginLeft: '0.5rem', marginRight: '2rem' }}
                  />
                </Box>
              </Box>
              <Box>
                <List
                  sx={{
                    width: '100%',
                    /*maxWidth: 360,*/ bgcolor: 'background.paper',
                    borderTop: '0.5px',
                    borderLeft: 0,
                    borderRight: 0,
                    borderBottom: 0,
                    borderBottomLeftRadius: '12px',
                    borderBottomRightRadius: '12px',
                    borderStyle: 'solid',
                    borderColor: '#D9D9D9',
                  }}
                >
                  {data.map((item) => (
                    <ListItem>
                      <ListItemText>{item}</ListItemText>
                      <ListItemIcon>
                        <CheckBoxIcon />
                      </ListItemIcon>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: '1rem' }}>
              <Button
                variant='contained'
                sx={{
                  width: '16.5rem',
                  height: '3.3rem',
                  borderRadius: '2.5rem',
                  textTransform: 'unset',
                  backgroundColor: '#F67979',
                }}
              >
                Cancel
              </Button>
              <Button
                variant='contained'
                sx={{
                  width: '16.5rem',
                  height: '3.3rem',
                  borderRadius: '2.5rem',
                  textTransform: 'unset',
                  backgroundColor: '#10B278',
                  marginLeft: '0.75rem',
                }}
              >
                Assign Child
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
