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
import { getChildActivity, deleteChildActivities } from '../../store/actions/nannies';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

const useStyles = makeStyles({
  root: {
    boxShadow: 0,
  },
});
export default function ChildActivity() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activity = useSelector((state) => state.nannies.activity);
  console.log('activity list', activity);
  useEffect(() => {
    dispatch(getChildActivity());
  }, [dispatch]);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [selectedItem, setSelectedItem] = useState('');
  console.log(selectedItem, 'selectedItem');

  const handleCreateActivity = (appointment_id) => {
    // console.log('ID', id);
    navigate(`/dashboard/createactivity/${appointment_id}`);
  };

  const handleEditActivity = (appointment_id, id) => {
    console.log('ID', id);
    navigate(`/dashboard/editactivity/${appointment_id}/${id}`);
  };

  const handleActivityDetail = (appointment_id) => {
    console.log('appointment_id', appointment_id);
    navigate(`/dashboard/activitydetail/${appointment_id}`);
  };

  const handleClick = (event, item) => {
    setAnchorEl(event.currentTarget);
    setSelectedItem(item);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // useEffect(() => {
  //   dispatch(deleteChildActivities(activity.id));
  // }, [dispatch, activity.id]);

  // const deleteActivity = () => {
  //   dispatch(deleteChildActivities(activity.id));
  // };

  // function sortTable() {
  //   var table, rows, switching, i, x, y, shouldSwitch;
  //   table = document.getElementById('activityTable');
  //   switching = true;
  //   /*Make a loop that will continue until
  //   no switching has been done:*/
  //   while (switching) {

  //     switching = true;
  //     rows = table.rows;
  //     /*Loop through all table rows (except the
  //     first, which contains table headers):*/
  //     for (i = 1; i < rows.length - 1; i++) {

  //       shouldSwitch = true;
  //       /*Get the two elements you want to compare,
  //       one from current row and one from the next:*/
  //       x = rows[i].getElementsByTagName('TD')[0];
  //       y = rows[i + 1].getElementsByTagName('TD')[0];

  //       if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

  //         shouldSwitch = true;
  //         break;
  //       }
  //     }
  //     if (shouldSwitch) {
  //       /*If a switch has been marked, make the switch
  //       and mark that a switch has been done:*/
  //       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
  //       switching = true;
  //     }
  //   }
  // }

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
        {activity?.map((item, index) => (
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
                    sx={{
                      boxShadow: 0,
                      color: '#2586d7',
                    }}
                  >
                    <FaChild style={{ position: 'relative', bottom: '2px' }} /> Create New Activity
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => {
                      e.preventDefault();
                      handleEditActivity(selectedItem.id, selectedItem.appointment_id);
                    }}
                    id={activity?.id}
                    sx={{
                      boxShadow: 0,
                      color: '#10B278',
                    }}
                  >
                    <BiEdit /> Edit Activity
                  </MenuItem>
                  <MenuItem
                    onClick={() => dispatch(deleteChildActivities(item.id))}
                    // onClick={deleteActivity}
                    id={activity?.id}
                    sx={{
                      boxShadow: 0,
                      color: '#F67979',
                    }}
                  >
                    <AiOutlineDelete /> Delete Activity
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => {
                      e.preventDefault();
                      handleActivityDetail(selectedItem.appointment.appointment_id);
                    }}
                    id={activity?.appointment?.appointment_id}
                    sx={{
                      boxShadow: 0,
                      color: '#C1C1C2',
                    }}
                  >
                    {' '}
                    <span style={{ color: '#768471', position: 'relative', top: '2px' }}>
                      <AiOutlineInfoCircle />
                    </span>{' '}
                    View Details
                  </MenuItem>
                </Menu>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
