import React from 'react';
import './Activitydiary.css';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/NavBar';


const Activitydiary = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <select>
          <option>B.Tech - IV ME I A</option>
        </select>
        <a href="#">CAD / CAM Lab</a>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Activity Diary (CAD / CAM Lab) Section: IV ME I A - 2024-25</h2>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>Period</th>
              <th>Topic</th>
              <th>Remark</th>
              <th>Absentees</th>
            </tr>
          </thead>
          <tbody>
            {/* Example rows, add more based on your data */}
            <tr>
              <td>1</td>
              <td>28-10-2024</td>
              <td>4</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td>28-10-2024</td>
              <td>5</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td>28-10-2024</td>
              <td>6</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {/* Add more rows here */}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Activitydiary;