import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;

  const [module, setModule] = useState({
    id: "1",
    name: "React",
    description: "Introduction to React",
    course: "Web Development",
  });
  const Module_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3 id="wd-working-with-objects">Working With Objects</h3>
      <div>
        <h4>Modifying Assignment Properties</h4>
        <a
          id="wd-update-assignment-title"
          className="btn btn-primary float-end"
          href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
        >
          Update Title
        </a>
        <input
          className="form-control w-75"
          id="wd-assignment-title"
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
        />
        <hr />
        <a
          id="wd-update-assignment-score"
          className="btn btn-primary float-end"
          href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
        >
          Update Score
        </a>
        <input
          type="number"
          className="form-control w-75"
          id="wd-assignment-score"
          value={assignment.score}
          onChange={(e) =>
            setAssignment({
              ...assignment,
              score: parseInt(e.target.value, 10),
            })
          }
        />
        <hr />
        <a
          id="wd-update-assignment-completed"
          className="btn btn-primary float-end"
          href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
        >
          Update Completed
        </a>
        <input
          type="checkbox"
          className="form-check-input"
          id="wd-assignment-completed"
          checked={assignment.completed}
          onChange={(e) =>
            setAssignment({
              ...assignment,
              completed: e.target.checked,
            })
          }
        />
        <hr />

        <h4>Retrieving Properties</h4>
        <a
          id="wd-retrieve-assignment-title"
          className="btn btn-primary"
          href={`${REMOTE_SERVER}/lab5/assignment/title`}
        >
          Get Title
        </a>

        <hr />
      </div>
      <div>
        <h4>Modifying Module Properties</h4>
        <a
          id="wd-update-module-name"
          className="btn btn-primary float-end"
          href={`${Module_API_URL}/name/${module.name}`}
        >
          Update Name
        </a>
        <input
          className="form-control w-75"
          id="wd-module-name"
          value={module.name}
          onChange={(e) => setModule({ ...module, name: e.target.value })}
        />
        <hr />

        <h4>Retrieving Properties</h4>
        <a
          id="wd-retrieve-module-name"
          className="btn btn-primary"
          href={`${REMOTE_SERVER}/lab5/module/name`}
        >
          Get Name
        </a>

        <hr />
      </div>
    </div>
  );
}
