import React from "react";
import styles from "./assets/ActivityParent.module.scss";
// import datas from "./ActivityParentData";
import { BiSortUp } from "react-icons/bi";
import { HiOutlineAdjustments } from "react-icons/hi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import family from "./assets/img/family.png";
import Empty from "../../components/empty/Empty";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { childActivityParentAction } from "../../store/actions/childActivityParent";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function ActivityParent() {
  const { ChildActivity } = useSelector((state) => state.childActivityParent);
  console.log("ChildActivity", ChildActivity);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(childActivityParentAction());
  }, []);

  // const childActivityParentAction = [""];

  return (
    <div className={styles.containers}>
      <h1>Child Activity</h1>
      <div className={styles.adjust}>
        <div className={styles.sortFilter}>
          <button>
            <BiSortUp style={{ position: "relative", top: "1px" }} />
            Sort
          </button>
          <button>
            <HiOutlineAdjustments
              style={{ position: "relative", top: "1px" }}
            />
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
        {childActivityParentAction.length > 0 ? (
          <tr>
            <td>Sakura</td>
            <td>3/11/2021 07:00 PM</td>
            <td>Yugi Muto</td>
            <td>Play Bubble</td>

            <td>
              <div className={styles.dropdown}>
                <button className={styles.actionButton}>
                  &bull;&bull;&bull;
                </button>
                <div className={styles.dropdownContent}>
                  <Link to="/dashboard/parentactivitydetail">
                    <span
                      style={{
                        color: "#768471",
                        position: "relative",
                        top: "2px",
                      }}
                    >
                      <AiOutlineInfoCircle />
                    </span>{" "}
                    View Details
                  </Link>
                </div>
              </div>
            </td>
          </tr>
        ) : (
          <Empty />
        )}
      </table>
      <div className={styles.showingButton}>
        <h5>Showing 1 of 1</h5>
        <div className={styles.nextButton}>
          <button>
            <AiOutlineLeft style={{ position: "relative", top: "1px" }} />
            Previous
          </button>
          <button>
            Next
            <AiOutlineRight style={{ position: "relative", top: "1px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
