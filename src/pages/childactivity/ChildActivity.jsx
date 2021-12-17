import React from 'react';
import styles from './assets/ChildActivity.module.scss';
import datas from './data';
import { BiSortUp } from 'react-icons/bi';
import { HiOutlineAdjustments } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    boxShadow: 0,
  },
});
export default function ChildActivity() {
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

  return (
    <div className={styles.containers}>
      <h1>Child Activity</h1>
      <div className={styles.adjust}>
        <h5>Saturday, 3 November 2021</h5>
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
      <table>
        <tr>
          <th>Date & Time</th>
          <th>Children Name</th>
          <th>Nanny</th>
          <th>Activity Detail</th>
          <th>Action</th>
        </tr>
        {datas.map((data) => (
          <tr>
            <td>{data.time}</td>
            <td>{data.childName}</td>
            <td>{data.nanny}</td>
            <td>{data.activity}</td>

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
