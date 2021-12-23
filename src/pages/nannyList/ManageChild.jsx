import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiLeftArrowAlt } from 'react-icons/bi';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Box, Button, Typography, InputBase, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import styles from './assets/ManageChild.module.scss';
import { Link } from 'react-router-dom';
import { getClientAccepted } from '../../store/actions/clients';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { style } from '@mui/system';

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
        <StyledInputBase placeholder="Search child list" inputProps={{ 'aria-label': 'search' }} />
      </Search>
    </>
  );
};

export default function ManageChild() {
  const dispatch = useDispatch();

  const { loading, clients } = useSelector((state) => state.clients);
  console.log(clients);

  useEffect(() => {
    dispatch(getClientAccepted());
  }, [dispatch]);

  const [selected, setSelected] = useState([]);
  const [items, setItems] = useState('');
  const [check, setCheck] = useState(false);

  const handleCheck = (index) => {
    if (check !== true) {
      setItems(index);
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  const handleAllCheck = () => {
    if (check !== true) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <div className={styles.container}>
      <Box>
        <Link to="/dashboard/nannylist">
          <Typography sx={{ fontFamily: 'Nunito' }} variant="h4">
            <BiLeftArrowAlt style={{ position: 'relative', top: '5px' }} /> Manage Child
          </Typography>
        </Link>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '27px' }}>
          <Box sx={{ width: '45rem' }}>
            <Box sx={{ display: 'flex' }}>
              <Typography tx={{ marginRight: '0.75rem' }}>Limit Child Nanny Can Manage (6/5)</Typography>
              <Typography variant="caption" color="red" tx={{ lineHeight: '2.25px' }}>
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
                  <Checkbox onClick={handleAllCheck} />
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
                  {clients.appointments &&
                    clients.appointments.map((item, index) => (
                      <FormControl className={styles.formLabel} disabled={item.is_taken === true} required error={error} component="fieldset" variant="standard">
                        <FormControlLabel control={<Checkbox onClick={() => handleCheck(index)} onChange={handleChange} name={item.child.name} />} label={item.child.name} labelPlacement="start" />
                      </FormControl>
                    ))}
                </List>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: '1rem' }}>
              <Button
                variant="contained"
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
                variant="contained"
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
