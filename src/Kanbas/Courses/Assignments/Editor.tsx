import 'bootstrap/dist/css/bootstrap.min.css';
export default function AssignmentEditor() {
  return (
    <div className="container my-4" id="wd-assignments-editor">
      <div className="mb-3">
        <strong>
          <label htmlFor="wd-name" className="form-label fw-normal">
            Assignment Name
          </label>
        </strong>
        <input id="wd-name" value="A1 - ENV + HTML" className="form-control" />
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-12 col-md-12 border p-3">
            <p>
              The assignment is{" "}
              <a className="text-danger">
                available online
              </a>
            </p>
            <p>
              Submit a link to the landing page of your Web application running
              on{" "}
              <a className="text-primary">
                Netlify
              </a>
              .
            </p>
            <p>The landing page should include the following:</p>
            <ul>
              <li>Your full name and section</li>
              <li>Links to each of the lab assignments</li>
              <li>
                Link to the{" "}
                <a className="text-primary">
                  Kanbas
                </a>{" "}
                application
              </li>
              <li>Links to all relevant source code repositories</li>
            </ul>
            <p>
              The{" "}
              <a className="text-primary">
                Kanbas
              </a>{" "}
              application should include a link to navigate back to the landing
              page.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mb-3">
        <div className="col-md-12 col-sm-12 col-lg-12 d-flex custom-padding-lg custom-padding-md">
            <label htmlFor="wd-points" className="form-label me-2">
              Points
            </label>
            <input
              type="number"
              id="wd-points"
              defaultValue={100}
              className="form-control"
              style={{ flex: "1" }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12 col-sm-12 col-lg-12 d-flex custom2-padding-lg custom2-padding-md">
            <label htmlFor="wd-group" className="form-label me-2">
              Assignment Group
            </label>
            <select
              id="wd-group"
              className="form-control"
              style={{ flex: "1" }}
            >
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12 col-sm-12 col-lg-12 d-flex custom3-padding-lg custom3-padding-md">
            <label htmlFor="wd-display-grade-as" className="form-label me-2">
              Display Grade as
            </label>
            <select
              id="wd-display-grade-as"
              className="form-control"
              style={{ flex: "1" }}
            >
              <option value="Percentage">Percentage</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12 col-sm-12 col-lg-12 d-flex custom3-padding-lg custom3-padding-md">
            <label htmlFor="wd-submission-type" className="form-label me-2">
              Submission Type
            </label>
            <select
              id="wd-submission-type"
              className="form-control"
              style={{ flex: "1" }}
            >
              <option value="Online">Online</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <label className="form-label col-md-12 col-sm-12 col-lg-12 d-flex custom4-padding-lg custom4-padding-md " >
            Online Entry Options
          </label>
          <div className="flex-column col-md-12 col-sm-12 col-lg-12 d-flex custom4-padding-lg custom4-padding-md">
            <div className="form-check">
              <input
                type="checkbox"
                id="wd-text-entry"
                className="form-check-input"
              />
              <label htmlFor="wd-text-entry" className="form-check-label">
                Text Entry
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="wd-website-url"
                className="form-check-input"
              />
              <label htmlFor="wd-website-url" className="form-check-label">
                Website URL
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="wd-media-recordings"
                className="form-check-input"
              />
              <label
                htmlFor="wd-media-recordings"
                className="form-check-label"
              >
                Media Recordings
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="wd-student-annotation"
                className="form-check-input"
              />
              <label
                htmlFor="wd-student-annotation"
                className="form-check-label"
              >
                Student Annotation
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="wd-file-upload"
                className="form-check-input"
              />
              <label htmlFor="wd-file-upload" className="form-check-label">
                File Uploads
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 custom5-padding-lg custom5-padding-md d-flex ">
            <label style={{paddingRight:"5px"}}>Assign</label>
            <label
              htmlFor="wd-assign-to"
              className="form-label me-2"
              style={{ whiteSpace: "nowrap" }}
            >
              Assign to
            </label>
            <input
              type="text"
              id="wd-assign-to"
              value="Everyone"
              className="form-control"
              style={{ flex: "1", marginLeft: "10px" }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 custom6-padding-lg custom6-padding-md d-flex">
            <label
              htmlFor="wd-due-date"
              className="form-label me-2"
              style={{ whiteSpace: "nowrap" }}
            >
              Due
            </label>
            <input
              type="date"
              id="wd-due-date"
              value="2024-05-13"
              className="form-control"
              style={{ flex: "1", marginLeft: "10px" }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 custom6-padding-lg custom6-padding-md d-flex " style={{ gap: "10px" }}>
            <div className="d-flex align-items-center">
              <label
                htmlFor="wd-available-from"
                className="form-label me-2"
                style={{ whiteSpace: "nowrap" }}
              >
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                value="2024-05-06"
                className="form-control"
                style={{ flex: "1" }}
              />
            </div>
            <div className="d-flex align-items-center">
              <label
                htmlFor="wd-available-until"
                className="form-label me-2"
                style={{ whiteSpace: "nowrap" }}
              >
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                value="2024-05-20"
                className="form-control"
                style={{ flex: "1" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-secondary me-2">
          Cancel
        </button>
        <button type="button" className="btn btn-primary">
          Save
        </button>
      </div>
    </div>
  );
}
