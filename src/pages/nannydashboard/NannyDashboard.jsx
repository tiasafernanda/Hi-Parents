import * as React from 'react';
import styles from './assets/NannyDashboard.module.scss';
import appointment from './assets/img/new.png';
import client from './assets/img/client.png';
import nanny from './assets/img/nanny.png';
import { BsCheck2Circle } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiXCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function NannyDashboard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClientDetail = () => {
    window.location.href = '/dashboard/clientdetail';
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <div className={styles.cardGroup}>
        <div className={styles.card}>
          <div className={styles.cardText}>
            <h5>New Appointment</h5>
            <h2>11</h2>
          </div>
          <img src={appointment} alt='' />
        </div>
        <div className={styles.card}>
          <div className={styles.cardText}>
            <h5>Active Client</h5>
            <h2>11</h2>
          </div>
          <img src={client} alt='' />
        </div>
        <div className={styles.card}>
          <div className={styles.cardText}>
            <h5>Active Nanny</h5>
            <h2>8</h2>
          </div>
          <img src={nanny} alt='' />
        </div>
      </div>
      <div className={styles.table}>
        <h1>Client List</h1>
        <table>
          <tr>
            <th>Date Request</th>
            <th>Parent Name</th>
            <th>Client ID</th>
            <th>Children Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>3/11/2021 07:00 PM</td>
            <td>Yugi Muto</td>
            <td>#000123</td>
            <td>Yugi Muto</td>
            <td>
              <button className={styles.statusButton}>Active</button>
            </td>
            <td>
              {/* <div className={styles.dropdown}>
                <button className={styles.actionButton}>&bull;&bull;&bull;</button>
                <div className={styles.dropdownContent}>
                  <a href='x'>
                    <span>
                      <BsCheck2Circle
                        style={{ color: '#10B278', position: 'relative', top: '2px' }}
                      />
                    </span>{' '}
                    Accept Client
                  </a>
                  <a href='x'>
                    <span style={{ color: '#F67979', position: 'relative', top: '2px' }}>
                      <BiXCircle />
                    </span>{' '}
                    Reject Client
                  </a>
                  <Link to='clientdetail'>
                    <span style={{ color: '#768471', position: 'relative', top: '2px' }}>
                      <AiOutlineInfoCircle />
                    </span>{' '}
                    View Details
                  </Link>
                </div>
              </div> */}
              <div className={styles.menu}>
                <Button
                  id='basic-button'
                  aria-controls='basic-menu'
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  sx={{ color: 'black', boxShadow: 0 }}
                >
                  &bull;&bull;&bull;
                </Button>
                <Menu
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  sx={{
                    boxShadow: 0,
                  }}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem
                    onClick={handleClose}
                    sx={{
                      boxShadow: 0,
                    }}
                  >
                    <span>
                      <BsCheck2Circle
                        style={{ color: '#10B278', position: 'relative', top: '2px' }}
                      />
                    </span>{' '}
                    Accept Client
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    sx={{
                      boxShadow: 0,
                    }}
                  >
                    <span style={{ color: '#F67979', position: 'relative', top: '2px' }}>
                      <BiXCircle />
                    </span>{' '}
                    Reject Client
                  </MenuItem>
                  <Button
                    // onClick={handleClientDetail}
                    onClick={handleClientDetail}
                    sX={{
                      boxShadow: 0,
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
          <tr>
            <td>3/11/2021 07:00 PM</td>
            <td>Nobitakun</td>
            <td>#000123</td>
            <td>Nobitakun</td>
            <td>
              <button className={styles.statusButton}>Active</button>
            </td>
            <td>
              <div>
                <Button
                  id='basic-button'
                  aria-controls='basic-menu'
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  sx={{ color: 'black' }}
                >
                  &bull;&bull;&bull;
                </Button>
                <Menu
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <span>
                      <BsCheck2Circle
                        style={{ color: '#10B278', position: 'relative', top: '2px' }}
                      />
                    </span>{' '}
                    Accept Client
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <span style={{ color: '#F67979', position: 'relative', top: '2px' }}>
                      <BiXCircle />
                    </span>{' '}
                    Reject Client
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <span style={{ color: '#768471', position: 'relative', top: '2px' }}>
                      <AiOutlineInfoCircle />
                    </span>{' '}
                    View Details
                  </MenuItem>
                </Menu>
              </div>
            </td>
          </tr>
          <tr>
            <td>3/11/2021 07:00 PM</td>
            <td>Nobitakun Desu Ne</td>
            <td>#000123</td>
            <td>Nobitakun Desu Ne</td>
            <td>
              <button className={styles.statusButton}>Active</button>
            </td>
            <td>
              <div>
                <Button
                  id='basic-button'
                  aria-controls='basic-menu'
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  sx={{ color: 'black' }}
                >
                  &bull;&bull;&bull;
                </Button>
                <Menu
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <span>
                      <BsCheck2Circle
                        style={{ color: '#10B278', position: 'relative', top: '2px' }}
                      />
                    </span>{' '}
                    Accept Client
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <span style={{ color: '#F67979', position: 'relative', top: '2px' }}>
                      <BiXCircle />
                    </span>{' '}
                    Reject Client
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <span style={{ color: '#768471', position: 'relative', top: '2px' }}>
                      <AiOutlineInfoCircle />
                    </span>{' '}
                    View Details
                  </MenuItem>
                </Menu>
              </div>
            </td>
          </tr>
          <tr>
            <td>3/11/2021 07:00 PM</td>
            <td>Doraemon to Nani</td>
            <td>#000123</td>
            <td>Doraemon to Nani</td>
            <td>
              <button className={styles.statusButton}>Active</button>
            </td>
            <td>
              <div>
                <Button
                  id='basic-button'
                  aria-controls='basic-menu'
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  sx={{ color: 'black' }}
                >
                  &bull;&bull;&bull;
                </Button>
                <Menu
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <span>
                      <BsCheck2Circle
                        style={{ color: '#10B278', position: 'relative', top: '2px' }}
                      />
                    </span>{' '}
                    Accept Client
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <span style={{ color: '#F67979', position: 'relative', top: '2px' }}>
                      <BiXCircle />
                    </span>{' '}
                    Reject Client
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <span style={{ color: '#768471', position: 'relative', top: '2px' }}>
                      <AiOutlineInfoCircle />
                    </span>{' '}
                    View Details
                  </MenuItem>
                </Menu>
              </div>
            </td>
          </tr>
          <tr>
            <td className={styles.noBorder}>3/11/2021 07:00 PM</td>
            <td className={styles.noBorder}>Sugoi Desu</td>
            <td className={styles.noBorder}>#000123</td>
            <td className={styles.noBorder}>Sugoi Desu</td>
            <td className={styles.noBorder}>
              <button className={styles.statusButton}>Active</button>
            </td>
            <td className={styles.noBorder}>
              <div>
                <Button
                  id='basic-button'
                  aria-controls='basic-menu'
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  sx={{ color: 'black' }}
                >
                  &bull;&bull;&bull;
                </Button>
                <Menu
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <span>
                      <BsCheck2Circle
                        style={{ color: '#10B278', position: 'relative', top: '2px' }}
                      />
                    </span>{' '}
                    Accept Client
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <span style={{ color: '#F67979', position: 'relative', top: '2px' }}>
                      <BiXCircle />
                    </span>{' '}
                    Reject Client
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <span style={{ color: '#768471', position: 'relative', top: '2px' }}>
                      <AiOutlineInfoCircle />
                    </span>{' '}
                    View Details
                  </MenuItem>
                </Menu>
              </div>
            </td>
          </tr>
        </table>
        <div className={styles.add}>
          <Link to='/dashboard/clientlist'>{''} See All Client List</Link>
        </div>
      </div>
    </div>
  );
}
