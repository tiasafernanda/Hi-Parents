import React from "react";
import styles from "./assets/ActivityParent.module.scss";
import datas from "./ActivityParentData";
import { BiSortUp } from "react-icons/bi";
import { HiOutlineAdjustments } from "react-icons/hi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import family from "./assets/img/family.png";
import Empty from "../../components/empty/Empty";

export default function ActivityParent() {
  const dummyClient = [];
  return (
    <div className={styles.containers}>
      <h3>Child Activity</h3>
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
        {dummyClient.length > 0 ? (
          <tr>
            <td>Sakura</td>
            <td>3/11/2021 07:00 PM</td>
            <td>Yugi Muto</td>
            <td>Play Bubble</td>

            <td>
              <button className={styles.actionButton}>
                &bull;&bull;&bull;
              </button>
            </td>
          </tr>
        ) : (
          // <tr>
          //   <td colspan="6">
          //     <div className={styles.noClient}>
          //       <img src={family} alt="" />
          //       <h5>No Client list for today</h5>
          //     </div>
          //   </td>
          // </tr>
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
