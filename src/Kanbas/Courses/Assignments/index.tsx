import React from "react";
import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaSortDown } from "react-icons/fa";
import * as db from "../../Database";
import LessonControlButtons from "../Modules/LessonControlButton";
import AssignmentControls from "./AssignmentControls";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === cid);

  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-assignment-title p-3 ps-2 bg-light">
            <BsGripVertical className="me-2 fs-3" />
            <FaSortDown className="mb-3" />
            <strong className="mx-2 mb-2">ASSIGNMENTS</strong>
            <IoEllipsisVertical className="float-end mt-2 mx-1 " />
            <GoPlus className="float-end mt-2 mx-1" />
            <button className="btn float-end btn-light btn-outline-secondary rounded-pill text-black mx-2">
              40% of Total
            </button>
          </div>
          {assignments.map((assignment) => {
            let points = 100;

            return (
              <ul
                key={assignment._id}
                className="wd-lessons list-group rounded-0"
                style={{
                  borderLeftWidth: "thick",
                  borderLeftColor: "green",
                  borderLeftStyle: "solid",
                }}
              >
                <li className="wd-lesson list-group-item p-0">
                  <div className="wd-lesson-content p-3 ps-1">
                    <a
                      className="wd-assignment-link"
                      href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    >
                      <BsGripVertical className="me-2 fs-3" />
                      <MdOutlineAssignment className="me-2 fs-3 icon-green" />
                      {assignment.title}
                      <LessonControlButtons />
                      <br />
                    </a>
                    <div className="px-4 mx-5">
                      <span className="text-danger">Multiple Modules | </span>
                      <strong>Not available until </strong>
                      <span>{assignment.availableDate} |</span>
                      <br />
                      <strong>Due </strong>
                      <span>{assignment.dueDate} | {points} pts</span>
                    </div>
                  </div>
                </li>
              </ul>
            );
          })}
        </li>
      </ul>
    </div>
  );
} 
