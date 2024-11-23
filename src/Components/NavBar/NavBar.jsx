import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import "./NavBar.css";

function NavBar() {
  const [attendanceMenuVisible, setAttendanceMenuVisible] = useState(false);
  const [accountMenuVisible, setAccountMenuVisible] = useState(false);
  const [departmentMenuVisible, setDepartmentMenuVisible] = useState(false);
  const [classSelected, setClassSelected] = useState(false); // Track if a class is selected

  const navRef = useRef(null);

  const toggleAttendanceMenu = () => {
    setAttendanceMenuVisible(!attendanceMenuVisible);
    setAccountMenuVisible(false); // Close Account dropdown if open
    setClassSelected(false); // Reset class selection when reopening Attendance
  };

  const toggleAccountMenu = () => {
    setAccountMenuVisible(!accountMenuVisible);
    setAttendanceMenuVisible(false); // Close Attendance dropdown if open
  };

  const handleClassChange = (e) => {
    const selectedValue = e.target.value;
    setClassSelected(!!selectedValue); // Set classSelected to true if a class is chosen
    setDepartmentMenuVisible(!!selectedValue); // Show department dropdown if class is selected
  };

  // Hide dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setAttendanceMenuVisible(false);
        setAccountMenuVisible(false);
        setDepartmentMenuVisible(false);
        setClassSelected(false); // Reset class selection when clicking outside
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={navRef}>
      <div className="nav-left-section">
        <ul className="nav-menu-links">
          <Link to='/index'><li>Home</li></Link>
          <Link to='/timetable'><li>Timetable</li></Link>
          <li>
            <div className="menu-dropdown">
              <a href="#" onClick={toggleAttendanceMenu} id="attendance">Attendance</a>
              {attendanceMenuVisible && (
                <div className="menu-drop-container">
                  <div className="menu-dropdown-content">
                    {/* Class dropdown */}
                    <select id="classSelectDropdown" onChange={handleClassChange}>
                      <option value="">Class</option>
                      <option value="class1">Year-1</option>
                      <option value="class2">Year-2</option>
                    </select>

                    {/* Show Register and Activity Diary initially, hide after class selection */}
                    {!classSelected && (
                      <>
                        <select id="registerMenuSelect">
                          <option value="">Register</option>
                        </select>
                        <select id="activityDiaryMenuSelect" onChange={(e) => (window.location = e.target.value)}>
                          <option value="">Activity</option>
                          <option value="/activity">Activity Diary</option>
                        </select>
                      </>
                    )}

                    {/* Department dropdown, shown only after a class is selected */}
                    {departmentMenuVisible && (
                      <select id="deptSelectMenu" onChange={(e) => (window.location = e.target.value)}>
                        <option value="">Department</option>
                        <option value="/attendance">CSE-A/P&S</option>
                        <option value="ece">ECE-B/P&S</option>
                        <option value="eee">EEE-A/P&S</option>
                      </select>
                    )}
                  </div>
                </div>
              )}
            </div>
          </li>
          <li><a href="#notifications">Notifications</a></li>
        </ul>
      </div>
      <div className="nav-user-profile">
        <span>Welcome, User</span>
        <div className="account-menu">
          <button className="account-menu-button" onClick={toggleAccountMenu}>Account</button>
          {accountMenuVisible && (
            <div className="account-menu-content">
              <a href="#settings">Settings</a>
               <a><Link to="/">Logout</Link></a>
            </div>
          )}
        </div>
<img src="./images/menu.png"/>

      </div>

   
<div class="menu-list>
<ul class="option-list"
<li>home</li>
<li>Timetable</li>
<li>Attendance</li>
<li>notifications<li>
<li>account</li>
</ul>
</div>
</div>

  );
}

export default NavBar;
