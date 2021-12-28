import React, { useState } from 'react';
import styles from './assets/ActivityParent.module.scss';
import { BiSortUp } from 'react-icons/bi';
import { HiOutlineAdjustments } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { childActivityParentAction } from '../../store/actions/childActivityParent';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import Empty from '../../components/empty/Empty';
import Pagination from '@mui/material/Pagination';

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

  const [page, setPage] = useState(1);
  const [showPage, setShowPage] = useState(false);

  const handlePage = (e) => {
    e.preventDefault();
    setPage(parseInt(e.target.textContent));
    setShowPage(true);
  };

  useEffect(() => {
    dispatch(childActivityParentAction(page));
  }, [dispatch, page, showPage]);
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
      <div style={{ overflowX: 'auto' }}>
        <table >
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
                    <button
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
                      <AiOutlineInfoCircle
                        style={{ top: '2.5px', position: 'relative', marginRight: '3px' }}
                      />
                      View Details
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <Empty dashboard='No Children Activity' />
          )}
        </table>
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          count={childActivity?.pages}
          variant='outlined'
          shape='rounded'
          onChange={handlePage}
        />
      </div>
    </div>
  );
}
