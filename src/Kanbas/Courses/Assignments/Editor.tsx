import React from "react";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <strong>
        <label htmlFor="wd-name">Assignment Name</label>
      </strong>
      <br />
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" style={{ width: "350px", height: "160px" }}>
        The assignment is available online. Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Link to the Kanbas application Links to all relevant source
        code repositories. The Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <br />
      <br />
      <table>
        <tbody>
          <tr>
            <td style={{ textAlign: "right" }}>
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input type="points" id="wd-points" value={100} />
            </td>
          </tr>
          <br />
          <tr>
            <td style={{ textAlign: "right" }}>
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td style={{ textAlign: "right" }}>
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="Percentage">Percentage</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td style={{ textAlign: "right" }}>
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="Online">Online</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td></td>
            <td>
              <label>Online Entry Options</label>
              <br />
              <input type="checkbox" name="check-options" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input type="checkbox" name="check-options" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input
                type="checkbox"
                name="check-options"
                id="wd-media-recordings"
              />
              <label htmlFor="wd-media-recordings"> Media Recordings</label>
              <br />
              <input
                type="checkbox"
                name="check-options"
                id="wd-student-annotation"
              />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input
                type="checkbox"
                name="check-options"
                id="wd-file-uploads"
              />

              <label htmlFor="wd-file-uploads">File Uploads</label>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to" style={{ marginRight: "5px" }}>
                Assign
              </label>
            </td>
            <td>
              <label id="wd-assign-to">Assign to</label>
              <br />
              <input type="assign" id="wd-name" value="Everyone" />
            </td>
          </tr>

          <br />
          <tr>
            <td></td>
            <td>
              <label htmlFor="wd-due-date">Due</label>
              <br />
              <input type="date" id="wd-due-date" value="2024-05-13" />
            </td>
          </tr>
          <br />
          <tr />
          <td></td>
          <td>
            <label htmlFor="wd-available-from" style={{ marginRight: "35px" }}>
              Available from
            </label>
            <label htmlFor="wd-available-until">Until</label>
            <br />
            <input type="date" id="wd-available-from" value="2024-05-06" />
            <input type="date" id="wd-available-until" value="2024-05-20" />
          </td>
        </tbody>
      </table>
      <br />
      <hr />
      <div style={{ textAlign: "right" }}>
        <button type="submit">Cancel</button>
        <button type="submit">Save</button>
      </div>
    </div>
  );
}
