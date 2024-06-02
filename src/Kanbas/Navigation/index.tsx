import React, { useState } from 'react';
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import "./index.css"

export default function KanbasNavigation() {
  const [activeLink, setActiveLink] = useState('');

  return (
    <div id="wd-kanbas-navigation" className="list-group rounded-0">
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0"
      >
        <img src="/images/NEU.png" width="75px" alt="NEU logo" />
      </a>

      <a
        id="wd-account-link"
        href="#/Kanbas/Account"
        className={`list-group-item text-center border-0 ${activeLink === 'account' ? 'bg-white text-danger' : 'bg-black text-white'}`}
        onClick={() => setActiveLink('account')}
      >
        <FaRegCircleUser className={`fs-1 ${activeLink === 'account' ? 'text-danger' : 'text-white'}`} />
        <br />
        Account
      </a>

      <a
        id="wd-dashboard-link"
        href="#/Kanbas/Dashboard"
        className={`list-group-item text-center border-0 ${activeLink === 'dashboard' ? 'bg-white text-danger'  : 'bg-black text-white'}`}
        onClick={() => setActiveLink('dashboard')}
      >
        <AiOutlineDashboard className={`fs-1 ${activeLink === 'dashboard' ? 'text-danger' : 'text-danger'}`} />
        <br />
        Dashboard
      </a>

      <a
        id="wd-course-link"
        href="#/Kanbas/Courses"
        className={`list-group-item text-center border-0 ${activeLink === 'courses' ? 'bg-white text-danger'  : 'bg-black text-white'}`}
        onClick={() => setActiveLink('courses')}
      >
        <LiaBookSolid className={`fs-1 ${activeLink === 'courses' ? 'text-danger' : 'text-danger'}`} />
        <br />
        Courses
      </a>

      <a
        id="wd-calendar-link"
        href="#/Kanbas/Calendar"
        className={`list-group-item text-center border-0 ${activeLink === 'calendar' ? 'bg-white text-danger' : 'bg-black text-white'}`}
        onClick={() => setActiveLink('calendar')}
      >
        <IoCalendarOutline className={`fs-1 ${activeLink === 'calendar' ? 'text-danger' : 'text-danger'}`} />
        <br />
        Calendar
      </a>

      <a
        id="wd-inbox-link"
        href="#/Kanbas/Inbox"
        className={`list-group-item text-center border-0 ${activeLink === 'inbox' ? 'bg-white text-danger'  : 'bg-black text-white'}`}
        onClick={() => setActiveLink('inbox')}
      >
        <FaInbox className={`fs-1 ${activeLink === 'inbox' ? 'text-danger' : 'text-danger'}`} />
        <br />
        Inbox
      </a>

      <a
        id="wd-labs-link"
        href="#/Labs"
        className={`list-group-item text-center border-0 ${activeLink === 'labs' ? 'bg-white text-danger'  : 'bg-black text-white'}`}
        onClick={() => setActiveLink('labs')}
      >
        <IoSettingsOutline className={`fs-1 ${activeLink === 'labs' ? 'text-danger' : 'text-danger'}`} />
        <br />
        Labs
      </a>
    </div>
  );
}
