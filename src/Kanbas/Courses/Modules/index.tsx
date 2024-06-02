import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButton";
import ModuleControlButtons from "./ModuleControlButtons";
export default function Modules() {
  return (
    <div id="wd-modules">
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Introduction to the course
              <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Introduction to the course
              <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              READING
              <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Full Stack Developer - Chapter 1 - Introduction
              <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Full Stack Developer - Chapter 2 - Creating Us
              <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              SLIDES
              <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Introduction to Web Development
              <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Creating an HTTP server with Node.js
              <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Creating a React Application
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1, Lecture 2 - Formatting User Interfaces with HTML
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Learn how to create user interfaces with HTML
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Deploy the assignment to Netlify
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              SLIDES
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Formatting Web content with Headings
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Formatting content with Lists and Tables
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

{
  /* <li className="wd-content-item list-group-item p-3 ps-1">
              Learn what is Web Development
            </li>
          </ul>
          <span className="wd-title list-group-item p-3 ps-1">READING</span>
          <ul className="wd-content list-group-item p-3 ps-1">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 1 - Introduction
            </li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              Full Stack Developer - Chapter 2 - Creating Us
            </li>
          </ul>
          <span className="wd-title list-group-item p-3 ps-1">SLIDES</span>
          <ul className="wd-content  list-group rounded-0">
            <li className="wd-content-item list-group-item p-3 ps-1">
              Introduction to Web Development
            </li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              Creating an HTTP server with Node.js
            </li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              Creating a React Application
            </li>
          </ul>
        </li>
      </ul>
    </li><li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary">
          Week 1, Lecture 2 - Formatting User Interfaces with HTML
        </div>
        <ul className="wd-lessons list-group rounded-0">
          <li className="wd-lesson list-group-item p-3 ps-1">
            <span className="wd-title list-group-item p-3 ps-1">
              LEARNING OBJECTIVES
            </span>
            <ul className="wd-content list-group-item p-3 ps-1">
              <li className="wd-content-item list-group-item p-3 ps-1">
                Learn how to create user interfaces with HTML
              </li>
              <li className="wd-content-item list-group-item p-3 ps-1">
                Deploy the assignment to Netlify
              </li>
            </ul>
            <span className="wd-title list-group-item p-3 ps-1">SLIDES</span>
            <ul className="wd-content list-group rounded-0">
              <li className="wd-content-item list-group-item p-3 ps-1">
                Introduction to HTML and the DOM
              </li>
              <li className="wd-content-item list-group-item p-3 ps-1">
                Formatting Web content with Headings
              </li>
              <li className="wd-content-item list-group-item p-3 ps-1">
                Formatting content with Lists and Tables
              </li>
            </ul>
          </li>
        </ul>
      </li></>
      </ul>
    </div> */
}
