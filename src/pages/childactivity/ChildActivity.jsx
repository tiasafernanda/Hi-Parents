import React from 'react';
import { useEffect } from 'react';
import styles from './assets/ChildActivity.module.scss';
import { BiSortUp } from 'react-icons/bi';
import { HiOutlineAdjustments } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaChild } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { makeStyles } from '@mui/styles';
import { getChildActivity } from '../../store/actions/nannies';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

const useStyles = makeStyles({
  root: {
    boxShadow: 0,
  },
});
export default function ChildActivity() {
  const dispatch = useDispatch();
  const activity = useSelector((state) => state.nannies.activity);
  console.log('activity list', activity);
  useEffect(() => {
    dispatch(getChildActivity());
  }, [dispatch]);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClientDetail = () => {
    window.location.href = '/dashboard/activitydetail';
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // function sortTable() {
  //   var table, rows, switching, i, x, y, shouldSwitch;
  //   table = document.getElementById('activityTable');
  //   switching = true;
  //   /*Make a loop that will continue until
  //   no switching has been done:*/
  //   while (switching) {
  //     //start by saying: no switching is done:
  //     switching = true;
  //     rows = table.rows;
  //     /*Loop through all table rows (except the
  //     first, which contains table headers):*/
  //     for (i = 1; i < rows.length - 1; i++) {
  //       //start by saying there should be no switching:
  //       shouldSwitch = true;
  //       /*Get the two elements you want to compare,
  //       one from current row and one from the next:*/
  //       x = rows[i].getElementsByTagName('TD')[0];
  //       y = rows[i + 1].getElementsByTagName('TD')[0];
  //       //check if the two rows should switch place:
  //       if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
  //         //if so, mark as a switch and break the loop:
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
          <Link to='/dashboard/createactivity'>
            <FaChild style={{ position: 'relative', top: '1px' }} /> Create New Activity
          </Link>
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
          <tr key={index}>
            <td>{dayjs(item?.createdAt).format('DD/MM/YYYY h:mm A')}</td>
            <td>{item?.appointment?.child?.name}</td>
            <td>{item?.appointment?.nanny?.name}</td>
            <td>{item?.activity_detail}</td>

            <td>
              <div className={styles.menu}>
                <Button
                  id='basic-button'
                  aria-controls='basic-menu'
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  sx={{ color: 'black', boxShadow: 'none' }}
                >
                  &bull;&bull;&bull;
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  elevation={1}
                  className={classes.root}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <Button
                    onClick={handleClientDetail}
                    sx={{
                      boxShadow: 0,
                      color: 'black',
                    }}
                  >
                    <span style={{ color: '#768471', position: 'relative', top: '2px' }}>
                      <AiOutlineInfoCircle />
                    </span>{' '}
                    View Details
                  </Button>
                </Menu>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
