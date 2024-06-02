import { IoSettingsSharp } from "react-icons/io5";
import { FaFileImport, FaFileExport } from "react-icons/fa";

export default function GradeSideBar() {
  return (
    <div id="wd-grade-sidebar">
      <button
        id="wd-setting"
        className="btn btn-lg btn-light me-1 float-end "
        type="button"
      >
        <IoSettingsSharp />
      </button>
      <div className="dropdown d-inline me-1 mx-2 float-end">
        <button
          id="wd-export-btn"
          className="btn btn-lg btn-light dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          <FaFileExport />
          Export
        </button>
      </div>

      <button
        id="wd-import"
        className="btn btn-lg btn-light me-1 float-end "
        type="button"
      >
        <FaFileImport /> Import
      </button>
    </div>
  );
}
