import { FaSearch } from "react-icons/fa";
import GradeSideBar from "./GradeSideBar";
import { CiFilter } from "react-icons/ci";
import { LiaFileExportSolid } from "react-icons/lia";

export default function Grades() {
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
                  <option value="Jane Adams">Jane Adams</option>
                  <option value="Christina Allen">Christina Allen</option>
                  <option value="Samreen Ansari">Samreen Ansari</option>
                  <option value="Han Bao">Han Bao</option>
                  <option value="Mahi Sai Srinivas Bobbili">
                    Mahi Sai Srinivas Bobbili
                  </option>
                  <option value="Siran Cao">Siran Cao</option>
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
                  <option value="A1">Assignment 1</option>
                  <option value="A2">Assignment 2</option>
                  <option value="A3">Assignment 3</option>
                  <option value="A4">Assignment 4</option>
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
              <th style={{ fontWeight: "normal" }}>
                A1 SETUP Out of 100
                <br />
              </th>
              <th style={{ fontWeight: "normal" }}>
                A2 HTML Out of 100
                <br />
              </th>
              <th style={{ fontWeight: "normal" }}>
                A3 CSS
                <br></br>Out of 1..
                <br />
              </th>
              <th style={{ fontWeight: "normal" }}>
                A4 BOOTSTRAP Out of 100
                <br />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-danger">Jane Adams</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>92.18%</td>
              <td>66.22%</td>
            </tr>
            <tr className="table-secondary">
              <td className="text-danger ">Christina Allen</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td className="text-danger">Samreen Ansari</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td className="text-danger table-secondary">Han Bao</td>
              <td className="table-secondary">100%</td>
              <td className="table-secondary">100%</td>
              <td>
                <input style={{ width: "70px" }} placeholder="88.03%"></input>
                <button id="wd-export-icon" className="btn btn-lg mb-2">
                  <LiaFileExportSolid />
                </button>
              </td>
              <td className="table-secondary">98.99%</td>
            </tr>
            <tr>
              <td className="text-danger">Mahi Sai SrinivasBobbili</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>98.37%</td>
              <td>100%</td>
            </tr>
            <tr className="table-secondary">
              <td className="text-danger">Siran Cao</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
