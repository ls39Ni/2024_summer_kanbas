import AssignmentsControls from "./AssignmentControls";
import { deleteAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import { useParams, useNavigate } from "react-router";
import LessonControlButtons from "./LessonControButton";
import AssignmentControlButtons from "./AssignmentControlButtons";
import "./style.css";
import { FaSortDown } from "react-icons/fa";

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  return (
    <div id="wd-assignments">
      <AssignmentsControls
        addAssignment={() => {
          navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
        }}
      />
      <ul id="wd-assignments" className="list-group rounded-0 mt-3">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-assignments-title p-3 ps-2 bg-light">
            <BsGripVertical className="me-2 fs-3" />
            <FaSortDown className="mb-3" />
            <strong className="mx-2 mb-2">ASSIGNMENTS</strong>
            <LessonControlButtons />
          </div>
          <ul
            className="wd-lessons list-group rounded-0"
            style={{
              borderLeftWidth: "thick",
              borderLeftColor: "green",
              borderLeftStyle: "solid",
            }}
          >
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li
                  key={assignment._id}
                  className="wd-assignment-list-item list-group-item p-6 ps-1"
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <BsGripVertical className="me-2 fs-3" />
                      <MdOutlineAssignment className="me-2 fs-3 icon-green" />
                      <div>{assignment.title}</div>
                    </div>
                    <AssignmentControlButtons
                      assignmentId={assignment._id}
                      deleteAssignment={(assignmentId) => {
                        dispatch(deleteAssignment(assignmentId));
                      }}
                      editAssignment={() =>
                        navigate(
                          `/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`
                        )
                      }
                    />
                  </div>
                  <div style={{ marginTop: "10px", paddingLeft: "75px" }}>
                    <span className="text-danger">Multiple Modules</span>
                    <span style={{ marginLeft: "5px" }}>
                      | <strong>Not available until </strong>
                      {assignment.availableDate}
                    </span>
                    <br />
                    <strong>Due </strong>
                    {assignment.dueDate} | {assignment.points} pts
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
