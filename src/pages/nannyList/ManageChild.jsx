/* eslint-disable array-callback-return */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { Box, Button, Typography, InputBase, List, ListItem, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import styles from './assets/ManageChild.module.scss';
import { Link } from 'react-router-dom';
import { getClientAccepted } from '../../store/actions/clients';
import { putManageChild } from '../../store/actions/nannies';
import Checkbox from '@mui/material/Checkbox';
import { ListItemButton } from '@mui/material';

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
  const dispatch = useDispatch();

  const { loading, clients } = useSelector((state) => state.clients);
  const [checkedLists, setCheckedLists] = useState(null);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [values, setValues] = useState([]);

  useEffect(() => {
    dispatch(getClientAccepted());
  }, [dispatch]);

  useEffect(() => {
    let temp = [];
    if (clients.appointments) {
      clients.appointments.forEach((element) => {
        if (element.is_taken) {
          temp.push(true);
        } else {
          temp.push(false);
        }
      });
      setCheckedLists(temp);
    }
  }, [clients]);

  useEffect(() => {
    if (checkedLists) {
      let temp = [...checkedLists];
      if (isSelectAll) {
        checkedLists.map((e, idx) => {
          temp[idx] = true;
        });
      } else {
        //loop client.appointments untuk menghindari value checkedlist yg sudah true berubah menjadi false
        clients.appointments.forEach((element, idx) => {
          if (!element.is_taken) {
            temp[idx] = false;
          }
        });
      }
      setCheckedLists(temp);
    }
  }, [checkedLists, clients.appointments, isSelectAll]);

  const handleCheck = (index) => {
    let temp = [...checkedLists];
    temp[index] = !temp[index];
    setCheckedLists(temp);
  };

  const handleAllCheck = () => {
    setIsSelectAll(!isSelectAll);
  };

  const handleChange = (event) => {
    let temp = [...values];
    if (values.includes(event.target.value)) {
      temp = temp.filter((elTemp) => {
        return elTemp !== event.target.value;
      });
    } else {
      temp.push(event.target.value);
    }

    setValues(temp);
  };

  const [selectedChild, setSelectedChild] = useState({
    appointment_id: null,
  });

  const handleSubmit = () => {
    let temp = [...values];
    setSelectedChild((selectedChild.appointment_id = temp));
    dispatch(putManageChild(selectedChild));
  };
  console.log(selectedChild, 'testes');

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
                Limit Child Nanny Can Manage ({values.length !== 0 ? values.length : '0'}/5)
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
                  height: '5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingLeft: '1rem',
                  paddingRight: '1.2rem',
                  borderStyle: 'solid',
                  borderColor: '#b8b8b8',
                  borderWidth: '1px',
                  borderTop: 0,
                  borderLeft: 0,
                  borderRight: 0,
                }}
              >
                <SearchInput />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography>Select All</Typography>
                  <Checkbox className={styles.formLabel} onClick={handleAllCheck} />
                </Box>
              </Box>

              <List
                sx={{
                  width: '100%',
                  //maxWidth: 360,
                  bgcolor: 'background.paper',
                  position: 'relative',
                  overflow: 'auto',
                  maxHeight: 300,
                  '& ul': { padding: 0 },
                }}
              >
                {loading
                  ? 'loading'
                  : clients.appointments &&
                    checkedLists &&
                    clients.appointments.map((item, index) => (
                      // <FormControl className={styles.formLabel} disabled={item.is_taken === true} component="fieldset" variant="standard">
                      //   <FormControlLabel
                      //     control={<Checkbox checked={checkedLists[index]} onClick={() => handleCheck(index)} onChange={handleChange} name={item.child.name} value={item.appointment_id} />}
                      //     label={item.child.name}
                      //     labelPlacement="start"
                      //   />
                      // </FormControl>
                      <ListItem
                        secondaryAction={
                          <Checkbox
                            className={styles.formLabel}
                            edge='end'
                            checked={checkedLists[index]}
                            onClick={() => handleCheck(index)}
                            onChange={handleChange}
                            name={item.child.name}
                            value={item.appointment_id}
                          />
                        }
                        disablePadding
                        disabled={item.is_taken === true}
                      >
                        <ListItemButton>
                          <ListItemText primary={item.child.name} />
                        </ListItemButton>
                      </ListItem>
                    ))}
              </List>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: '1rem' }}>
              {/* <Link to="/dashboard/nannylist"> */}
              <Button
                variant='contained'
                sx={{
                  width: '16.5rem',
                  height: '3.3rem',
                  borderRadius: '2.5rem',
                  textTransform: 'unset',
                  backgroundColor: '#F67979',
                }}
                onClick={() => (window.location.href = '/dashboard/nannylist')}
              >
                Cancel
              </Button>
              {/* </Link> */}
              <Button
                variant='contained'
                sx={{
                  width: '16.5rem',
                  height: '3.3rem',
                  borderRadius: '2.5rem',
                  textTransform: 'unset',
                  backgroundColor: '#10B278',
                }}
                onClick={handleSubmit}
              >
                Assign Child
              </Button>
              {/* <Button
                variant="contained"
                sx={{
                  width: '16.5rem',
                  height: '3.3rem',
                  borderRadius: '2.5rem',
                  textTransform: 'unset',
                  backgroundColor: '#10B278',
                  marginLeft: '0.75rem',
                }}
                onCLick={() => handleSubmit()}
              >
                Assign Child
              </Button> */}
              {/* <button 
                onCLick={handleManageChild}
                style={{
                  width: '16.5rem',
                  height: '3.3rem',
                  borderRadius: '2.5rem',
                  textTransform: 'unset',
                  backgroundColor: '#10B278',
                  marginLeft: '0.75rem',
                }}
              >
                Assign Child
              </button> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
