import React from 'react';
import styles from './assets/ActivityParent.module.scss';
// import datas from "./ActivityParentData";
import { BiSortUp } from 'react-icons/bi';
import { HiOutlineAdjustments } from 'react-icons/hi';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
// import family from "./assets/img/family.png";
// import Empty from '../../components/empty/Empty';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { childActivityParentAction } from '../../store/actions/childActivityParent';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import dayjs from 'dayjs';
import Empty from '../../components/empty/Empty';
// import { Empty } from '../../components/empty/Empty';

export default function ActivityParent() {
  const childActivity = useSelector((state) => state.childActivityParent.Activity);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(childActivityParentAction());
  }, [dispatch]);

  const handleActivityDetail = (id) => {
    navigate(`/dashboard/parentactivitydetail/${id}`);
  };
  return (
    <div className={styles.containers}>
      <h1>Child Activity</h1>
      <div className={styles.adjust}>
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
        {childActivity.length !== [0] ? (
          childActivity?.map((item, index) => (
            <tr key={index}>
              <td>{dayjs(item?.createdAt).format('DD/MM/YYYY h:mm A')}</td>
              <td>{item?.appointment?.child?.name}</td>
              <td>{item?.appointment?.nanny?.name}</td>
              <td>{item?.activity_detail}</td>

              <td>
                <div className={styles.menu} id={item.id}>
                  <Button
                    id={item.id}
                    aria-controls='basic-menu'
                    aria-haspopup='true'
                    // onClick={(e) => handleClick(e, item)}
                    onClick={(e) => {
                      e.preventDefault();
                      handleActivityDetail(index);
                    }}
                    sx={{ color: 'black', boxShadow: 'none' }}
                  >
                    <AiOutlineInfoCircle />
                    View Details
                  </Button>
                  {/* <Menu
                  anchorEl={anchorEl}
                  id={item.id}
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
                      handleActivityDetail(item.id);
                    }}
                    id={item.id}
                    sx={{
                      boxShadow: 0,
                      color: 'black',
                    }}
                  >
                    {' '}
                    <span style={{ color: '#768471', position: 'relative', top: '2px' }}>
                      <AiOutlineInfoCircle />
                    </span>{' '}
                    View Details
                  </MenuItem>
                </Menu> */}
                </div>
              </td>
            </tr>
          ))
        ) : (
          <Empty dashboard='No Children Activity' />
        )}
      </table>
      <div className={styles.showingButton}>
        <h5>Showing 1 of 1</h5>
        <div className={styles.nextButton}>
          <button>
            <AiOutlineLeft style={{ position: 'relative', top: '1px' }} />
            Previous
          </button>
          <button>
            Next
            <AiOutlineRight style={{ position: 'relative', top: '1px' }} />
          </button>
        </div>
      </div>
    </div>
  );
}
