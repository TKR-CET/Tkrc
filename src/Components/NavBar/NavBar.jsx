import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./NavBar.css";

function NavBar() {
  const [attendanceMenuVisible, setAttendanceMenuVisible] = useState(false);
  const [accountMenuVisible, setAccountMenuVisible] = useState(false);
  const [departmentMenuVisible, setDepartmentMenuVisible] = useState(false);
  const [classSelected, setClassSelected] = useState(false);

  const navRef = useRef(null);
  const navigate = useNavigate();

  const toggleAttendanceMenu = () => {
    setAttendanceMenuVisible(!attendanceMenuVisible);
    setAccountMenuVisible(false);
    setClassSelected(false); // Reset class selection when reopening Attendance
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setAttendanceMenuVisible(false);
        setAccountMenuVisible(false);
        setDepartmentMenuVisible(false);
        setClassSelected(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef}>
      <div className="nav-left-section">
        <ul className="nav-menu-links">
          <Link to="/index"><li>Home</li></Link>
          <Link to="/timetable"><li>Timetable</li></Link>
          <li>
            <div className="menu-dropdown">
              <a onClick={toggleAttendanceMenu} id="attendance">Attendance</a>
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
                        <select
                          id="activityDiaryMenuSelect"
                          onChange={(e) => navigate(e.target.value)}
                        >
                          <option value="">Activity</option>
                          <option value="/activity">Activity Diary</option>
                        </select>
                      </>
                    )}
                    {departmentMenuVisible && (
                      <select
                        id="deptSelectMenu"
                        onChange={(e) => navigate(e.target.value)}
                      >
                        <option value="">Department</option>
                        <option value="/attendance">CSE-A/P&S</option>
                        <option value="/ece">ECE-B/P&S</option>
                        <option value="/eee">EEE-A/P&S</option>
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
              <Link to="/settings">Settings</Link>
              <Link to="/">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;