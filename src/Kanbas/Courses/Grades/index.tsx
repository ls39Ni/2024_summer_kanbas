import React from "react";
import { useParams } from "react-router";
import { FaSearch } from "react-icons/fa";
import GradeSideBar from "./GradeSideBar";
import { CiFilter } from "react-icons/ci";
import * as db from "../../Database";

export default function Grades() {
  const { cid } = useParams();
  const courseEnrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === cid
  );
  const studentIds = courseEnrollments.map((enrollment) => enrollment.user);
  const studentsGrades = db.grades.filter((grade) =>
    studentIds.includes(grade.student)
  );
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === cid
  );
  const assignmentIds = assignments.map((assignment) => assignment._id);
  const courseGrades = studentsGrades.filter((grade) =>
    assignmentIds.includes(grade.assignment)
  );
  const gradesByStudent = studentIds
    .map((studentId) => {
      const studentGrades = courseGrades.filter(
        (grade) => grade.student === studentId
      );
      const user = db.users.find((user) => user._id === studentId);
      if (user) {
        const fullName = `${user.firstName} ${user.lastName}`;
        return {
          studentId,
          fullName,
          grades: studentGrades,
        };
      }
      return null;
    })
    .filter((student) => student !== null);

  return (
    <div id="wd-grades" className="wd-grades fs-5">
      <GradeSideBar />
      <br />
      <table width="100%" className="search-box">
        <thead>
          <tr>
            <th className="ps-5">Student Names</th>
            <th>Assignment Names</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="input-group mb-3 ps-5 input-group-lg">
                <span className="input-group-text bg-transparent border border-light border-end-0">
                  <FaSearch />
                </span>
                <select
                  className="form-select border-light border-start-0"
                  id="studentName"
                >
                  <option value="">Search Students</option>
                  {courseEnrollments.map((enrollment, index) => {
                    const user = db.users.find(
                      (user) => user._id === enrollment.user
                    );
                    if (user) {
                      const fullName = `${user.firstName} ${user.lastName}`;
                      return (
                        <option key={index} value={enrollment.user}>
                          {fullName}
                        </option>
                      );
                    }
                    return null;
                  })}
                </select>
              </div>
            </td>
            <td>
              <div className="input-group mb-3 input-group-lg">
                <span className="input-group-text bg-transparent border border-light border-end-0">
                  <FaSearch />
                </span>
                <select
                  className="form-select border-light border-start-0"
                  id="assignmentName"
                >
                  <option value="">Search Assignments</option>
                  {assignments.map((assignment, index) => (
                    <option key={index} value={assignment._id}>
                      {assignment.title}
                    </option>
                  ))}
                </select>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        id="wd-filters"
        className="btn btn-lg btn-light mx-5 mb-3"
        type="button"
      >
        <CiFilter /> Apply Filters
      </button>
      <div className="mx-5 fs-6 text-center">
        <table className="table table-bordered wd-grades-table">
          <thead>
            <tr className="table-secondary py-2">
              <th>Student Name</th>
              {assignments.map((assignment, index) => (
                <th key={index} style={{ fontWeight: "normal" }}>
                  {assignment.title} Out of 100
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {gradesByStudent.map((student, index) => (
              <tr key={index}>
                <td className="text-danger text-start">{student?.fullName}</td>
                {assignments.map((assignment, index) => {
                  const grade = student?.grades.find(
                    (g) => g.assignment === assignment._id
                  );
                  return (
                    <td key={index}>{grade ? `${grade.grade}%` : "N/A"}</td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
