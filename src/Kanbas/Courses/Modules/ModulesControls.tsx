import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import ProhibitMark from "./ProhibitMark";
export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button
        id="wd-add-module-btn"
        className="btn btn-lg btn-danger me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>
      <div className="dropdown d-inline me-1 float-end">
        <button
          id="wd-publish-all-btn"
          className="btn btn-lg btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          <GreenCheckmark />
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <p
              id="wd-publish-all-modules-and-items-btn"
              className="dropdown-item"
            >
              <GreenCheckmark />
              Publish all modules and items
            </p>
          </li>
          <li>
            <p
              id="wd-publish-modules-only-button"
              className="dropdown-item"
        
            >
              <GreenCheckmark />
              Publish modules only
            </p>
          </li>
          {/* Create two more items with IDs wd-unpublish-all-modules-and-items and
              wd-unpublish-modules-only with labels Unpublish all modules and items
              and Unpublish modules only */}
          <li>
            <p
              id="wd-unpublish-all-modules-and-items"
              className="dropdown-item"
      
              
            >
              <ProhibitMark />
              Unpublish all modules and items
            </p>
          </li>
          <li>
            <p
              id="wd-unpublish-modules-only"
              className="dropdown-item"
           
            >
              <ProhibitMark />
              Unpublish modules only
            </p>
          </li>
        </ul>
      </div>
      {/* Implement the View Progress and Collapse All buttons
          with IDs wd-view-progress and wd-collapse-all */}
      <button
        id="wd-collpse-all"
        className="btn btn-lg  btn-secondary me-1 float-end"
        type="button"
      >
        Collapse-all
      </button>
      <button
        id="wd-view-progress"
        className="btn btn-lg  btn-secondary me-1 float-end"
        type="button"
      >
        View Progress
      </button>
    </div>
  );
}
