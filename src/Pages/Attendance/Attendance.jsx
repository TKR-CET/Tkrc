import React from "react";
import { useState } from "react";
import './Attendance.css';
import { Link } from "react-router-dom";
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/NavBar';

const Attendance = () => {
    const [date, setDate] = useState("2024-11-06");

    return (
      <div>
          <Header/>
      <NavBar/>
        <div className="content">
            <div className="title-bar">
                {/* <h2>B.Tech - IV ME I A</h2> */}
                <div className="batch-date-selectors">
                    <label htmlFor="batch">Batch: </label>
                    <select id="batch" className="batch-selector">
                        <option>ALL</option>
                    </select>
                    <label htmlFor="date">Date: </label>
                    <input 
                        type="date" 
                        id="date" 
                        className="date-selector" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <Link to="/mark" className="go">GO</Link>
                </div>
            </div>
            <ul className="container">
                <li className="section" style={{ paddingLeft: "40px" }}> Subject: CAD/CAM Lab</li>
                <li className="section" style={{ paddingRight: "40px" }}>Section: IV ME I A (2024-25)</li>
            </ul>
            <table className="attendance-table">
                <thead>
                    <tr className="table1">
                        <th>Class</th>
                        <th>Date</th>
                        <th>P</th>
                        <th>Absentees</th>
                        <th>Topic</th>
                        <th>Remark</th>
                        <th>No.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>26</td>
                        <td>28-10-24</td>
                        <td>6</td>
                        <td>20K91A0328, 20K91A0335, 20K91A0343</td>
                        <td>3</td>
                        <td></td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>25</td>
                        <td>28-10-24</td>
                        <td>5</td>
                        <td>20K91A0328, 20K91A0335, 20K91A0343</td>
                        <td>3</td>
                        <td></td>
                        <td>3</td>
                    </tr>
                    {/* Add more rows as necessary */}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default Attendance;