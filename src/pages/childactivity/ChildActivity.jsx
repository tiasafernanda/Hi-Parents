import React, { useState } from 'react';
import { useEffect } from 'react';
import styles from './assets/ChildActivity.module.scss';
import { BiSortUp } from 'react-icons/bi';
import { HiOutlineAdjustments } from 'react-icons/hi';
import { AiOutlineInfoCircle, AiOutlineDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { FaChild } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { makeStyles } from '@mui/styles';
import {
  getChildActivity,
  deleteChildActivities,
  paginationActivityAction,
} from '../../store/actions/nannies';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import Pagination from '@mui/material/Pagination';
import jwt_decode from 'jwt-decode';
import ReactLoading from 'react-loading';

const useStyles = makeStyles({
  root: {
    boxShadow: 0,
  },
});
export default function ChildActivity() {
  const decoded = jwt_decode(localStorage.getItem('token'));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, activity } = useSelector((state) => state?.nannies);

  useEffect(() => {
    dispatch(getChildActivity());
  }, [dispatch]);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [selectedItem, setSelectedItem] = useState('');

  const handleCreateActivity = (appointment_id) => {
    navigate(`/dashboard/createactivity/${appointment_id}`);
  };

  const handleEditActivity = (appointment_id, id) => {
    navigate(`/dashboard/editactivity/${appointment_id}/${id}`);
  };

  const handleActivityDetail = (appointment_id) => {
    navigate(`/dashboard/activitydetail/${appointment_id}`);
  };

  const handleClick = (event, item) => {
    setAnchorEl(event.currentTarget);
    setSelectedItem(item);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteActivity = (id) => {
    let form = new FormData();
    form.append('id', id);
    dispatch(deleteChildActivities(form));
  };

  const [page, setPage] = useState(1);
  const [showPage, setShowPage] = useState(false);

  const handlePage = (e) => {
    e.preventDefault();
    setPage(parseInt(e.target.textContent));
    setShowPage(true);
  };

  useEffect(() => {
    dispatch(paginationActivityAction(page));
  }, [dispatch, page, showPage]);

  return (
    <div className={styles.containers}>
      <h1>Child Activity</h1>
      <div className={styles.adjust}>
        <h5>{dayjs().format('dddd, DD MMMM YYYY')}</h5>
        <div className={styles.sortFilter}>
          <button>
            <BiSortUp style={{ position: 'relative', top: '1px' }} />
            Sort
          </button>
          <button>
            <HiOutlineAdjustments style={{ position: 'relative', top: '1px' }} />
            Filter
          </button>
        </div>
      </div>
      <table id='activityTable'>
        <tr>
          <th>Date & Time</th>
          <th>Children Name</th>
          <th>Nanny</th>
          <th>Activity Detail</th>
          <th>Action</th>
        </tr>
        {loading ? (
          <ReactLoading type={'spin'} color={'#10B278'} height={200} width={200} />
        ) : (
          activity?.data?.map((item, index) => (
            <tr key={index} id={item.appointment_id}>
              <td>{dayjs(item?.createdAt).format('DD/MM/YYYY h:mm A')}</td>
              <td>{item?.appointment?.child?.name}</td>
              <td>{item?.appointment?.nanny?.name}</td>
              <td>{item?.activity_detail}</td>

              <td>
                <div className={styles.menu} appointment={item.appointment_id} id={item.id}>
                  <Button
                    appointment={item.appointment_id}
                    id={item.id}
                    aria-controls='basic-menu'
                    aria-haspopup='true'
                    aria-expanded={open ? 'true' : undefined}
                    onClick={() => {
                      handleDeleteActivity(item.id);
                    }}
                    disabled={decoded.name === item?.appointment?.nanny?.name ? false : true}
                    sx={{ boxShadow: 0, color: '#F67979' }}
                  >
                    <AiOutlineDelete /> Delete Activity
                  </Button>
                  <Button
                    appointment={item.appointment_id}
                    id={item.id}
                    aria-controls='basic-menu'
                    aria-haspopup='true'
                    aria-expanded={open ? 'true' : undefined}
                    onClick={(e) => handleClick(e, item)}
                    sx={{ color: 'black', boxShadow: 'none' }}
                  >
                    &bull;&bull;&bull;
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    id={(item.appointment_id, item.id)}
                    open={open}
                    onClose={handleClose}
                    elevation={1}
                    className={classes.root}
                    sx={{ display: 'flex', flexDirection: 'column' }}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem
                      onClick={(e) => {
                        e.preventDefault();
                        handleCreateActivity(selectedItem.appointment.appointment_id);
                      }}
                      id={activity?.appointment?.appointment_id}
                      disabled={decoded.name === item?.appointment?.nanny?.name ? false : true}
                      sx={{
                        boxShadow: 0,
                        color: '#2586d7',
                      }}
                    >
                      <FaChild style={{ position: 'relative', marginRight: '5px' }} /> Create New
                      Activity
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => {
                        e.preventDefault();
                        handleEditActivity(
                          selectedItem.appointment.appointment_id,
                          selectedItem.id
                        );
                      }}
                      id={activity?.id}
                      disabled={decoded.name === item?.appointment?.nanny?.name ? false : true}
                      sx={{
                        boxShadow: 0,
                        color: '#10B278',
                      }}
                    >
                      <BiEdit style={{ position: 'relative', marginRight: '5px' }} /> Edit Activity
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => {
                        e.preventDefault();
                        handleActivityDetail(selectedItem.appointment.appointment_id);
                      }}
                      id={activity?.appointment?.appointment_id}
                      sx={{
                        boxShadow: 0,
                        color: '#2F2F33',
                      }}
                    >
                      {' '}
                      <span style={{ position: 'relative', top: '2px', marginRight: '5px' }}>
                        <AiOutlineInfoCircle />
                      </span>{' '}
                      View Details
                    </MenuItem>
                  </Menu>
                </div>
              </td>
            </tr>
          ))
        )}
      </table>
      <div className={styles.paginationContainer}>
        <Pagination
          count={activity?.pages}
          variant='outlined'
          shape='rounded'
          onChange={handlePage}
        />
      </div>
    </div>
  );
}
