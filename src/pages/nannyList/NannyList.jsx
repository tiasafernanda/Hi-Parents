import * as React from 'react';
import { getNannies } from '../../store/actions/nannies';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { SortIcon, FilterIcon } from './NannyListIcons';
import {
  Box,
  Button,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ActionButton from '../../components/actionButton/ActionButton';
import styles from './assets/NannyList.module.scss';
import { useSelector } from 'react-redux';

/*function createData(data1, data2, data3, data4, status) {
  return { data1, data2, data3, data4, status };
}

const rows = [createData('Yugi Muto', '#000123', '08123912120', 0, false), createData('Yugi Muto', '#000123', '08123912120', 0, true)];*/

export default function NannyList() {
  useEffect(() => {
    dispatch(getNannies());
  }, []);

  const dispatch = useDispatch();

  const nannyList = useSelector((state) => state.nannies.nannies);
  console.log(nannyList.nannies, 'nannyList');

  // const [nanny, setNannyList] = useState({
  //   nanny_id: '',
  //   name: '',
  //   phone_number: '',
  //   numberOfChild: '',
  //   status: '',
  // });

  // useEffect(() => {
  //   setNannyList({
  //     nanny_id: nannyList.nanny_id,
  //     name: nannyList.name,
  //     phone_number: nannyList.phone_number,
  //     numberOfChild: nannyList.numberOfChild,
  //     status: nannyList.status,
  //   });
  // }, []);

  return (
    <div className={styles.container}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ fontFamily: 'Nunito' }} variant='h4'>
          Nanny List
        </Typography>
        <Box
          sx={{ display: 'flex', justifyContent: 'right', marginTop: '1rem', marginBottom: '1rem' }}
        >
          <Button
            variant='outlined'
            startIcon={<SortIcon />}
            sx={{
              color: 'black',
              borderColor: '#C1C1C2',
              borderRadius: '12px',
              textTransform: 'unset',
              width: '6.5rem',
              height: '3rem',
            }}
          >
            Sort
          </Button>
          <Button
            variant='outlined'
            startIcon={<FilterIcon />}
            sx={{
              color: 'black',
              borderColor: '#C1C1C2',
              borderRadius: '12px',
              textTransform: 'unset',
              width: '6.5rem',
              height: '3rem',
              marginLeft: '0.5rem',
            }}
          >
            Filter
          </Button>
        </Box>
        <TableContainer component={Paper} sx={{ borderRadius: '12px' }}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Nanny's Name</TableCell>
                <TableCell>Nanny ID</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell align='center'>Number of Child</TableCell>
                <TableCell align='center'>Status</TableCell>
                <TableCell align='center'>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {nannyList.nannies?.map((item, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component='th' scope='row'>
                    {item.name}
                  </TableCell>
                  <TableCell>{item.nanny_id}</TableCell>
                  <TableCell>{item.phone_number}</TableCell>
                  <TableCell align='center'>{item.numberOfChild}</TableCell>
                  <TableCell align='center'>
                    <Typography
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: item.status === 'Active' ? '#10B278' : '#F67979',
                        color: 'white',
                        width: 'fitContent',
                        height: '35px',
                        borderRadius: '50px',
                      }}
                    >
                      {item.status}
                    </Typography>
                  </TableCell>
                  <TableCell align='center'>
                    <ActionButton />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'end',
            marginTop: '1rem',
            marginBottom: '1rem',
          }}
        >
          <Box
            sx={{
              fontSize: '0.75rem',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <ArrowBackIosIcon />
            <Typography>Previous</Typography>
          </Box>
          <Box
            sx={{
              fontSize: '0.75rem',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: '1.5rem',
            }}
          >
            <Typography>Next</Typography>
            <ArrowForwardIosIcon />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
