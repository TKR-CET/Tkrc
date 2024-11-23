import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import "./NavBar.css";

function NavBar() {
  const [attendanceMenuVisible, setAttendanceMenuVisible] = useState(false);
  const [accountMenuVisible, setAccountMenuVisible] = useState(false);
  const [departmentMenuVisible, setDepartmentMenuVisible] = useState(false);
  const [classSelected, setClassSelected] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false); // Mobile menu visibility state

  const navRef = useRef(null);

  const toggleAttendanceMenu = () => {
    setAttendanceMenuVisible(!attendanceMenuVisible);
    setAccountMenuVisible(false);
    setClassSelected(false);
  };

  const toggleAccountMenu = () => {
    setAccountMenuVisible(!accountMenuVisible);
    setAttendanceMenuVisible(false);
  };

  const handleClassChange = (e) => {
    const selectedValue = e.target.value;
    setClassSelected(!!selectedValue);
    setDepartmentMenuVisible(!!selectedValue);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible); // Toggle the mobile menu visibility
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setAttendanceMenuVisible(false);
        setAccountMenuVisible(false);
        setDepartmentMenuVisible(false);
        setClassSelected(false);
        setMobileMenuVisible(false); // Hide mobile menu when clicking outside
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={navRef}>
      <div className="nav-bar">
        {/* Left Section */}
        <div className="nav-left-section">
          <h2>TKRCET</h2>
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <img src="./images/menu.png" alt="Menu" />
        </div>

        {/* Mobile Menu Options */}
        {mobileMenuVisible && (
          <div className="menu-list">
            <ul className="option-list">
              <li><Link to="/index">Home</Link></li>
              <li><Link to="/timetable">Timetable</Link></li>
              <li><a onClick={toggleAttendanceMenu}>Attendance</a></li>
              <li><a href="#notifications">Notifications</a></li>
              <li><a onClick={toggleAccountMenu}>Account</a></li>
            </ul>
          </div>
        )}

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <ul className="nav-menu-links">
            <Link to="/index"><li>Home</li></Link>
            <Link to="/timetable"><li>Timetable</li></Link>
            <li>
              <div className="menu-dropdown">
                <a href="#" onClick={toggleAttendanceMenu} id="attendance">Attendance</a>
                {attendanceMenuVisible && (
                  <div className="menu-drop-container">
                    <div className="menu-dropdown-content">
                      <select id="classSelectDropdown" onChange={handleClassChange}>
                        <option value="">Class</option>
                        <option value="class1">Year-1</option>
                        <option value="class2">Year-2</option>
                      </select>

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

        {/* Account Section */}
        <div className="nav-user-profile">
          <span>Welcome, User</span>
          <div className="account-menu">
            <button className="account-menu-button" onClick={toggleAccountMenu}>Account</button>
            {accountMenuVisible && (
              <div className="account-menu-content">
                <a href="#settings">Settings</a>
                <Link to="/">Logout</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;