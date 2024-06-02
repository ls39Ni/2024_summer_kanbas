import { PiProhibitBold } from "react-icons/pi";
import { FaCircle } from "react-icons/fa";
export default function ProhibitMark() {
    return (
      <span className="me-1 position-relative">
        <PiProhibitBold style={{ top: "2px"}} 
          className=" me-1 fs-5 position-absolute " />
       <FaCircle className="text-white me-1 fs-6" />
      </span>
    );
  }