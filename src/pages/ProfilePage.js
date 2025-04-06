import React from "react";
import "./ProfilePage.css";
import { FaHome, FaFileAlt, FaCalendarCheck, FaStar, FaTrash, FaUsers, FaSchool, FaHdd, FaPeopleArrows } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <h2 className="logo">EduBridge</h2>
                <img src=""></img>
                <nav>
                    <ul>
                        <li><FaHome /> Dashboard</li>
                        <li><FaFileAlt /> File sharing</li>
                        <li><FaCalendarCheck /> Attendance</li>
                        <li><FaPeopleArrows /> Profile</li>
                        {/* <li><FaTrash /> Recycle bin</li> */}
                    </ul>
                    {/* <h3>Shared resources</h3>
                    <ul>
                        <li><FaUsers /> Team</li>
                        <li><FaSchool /> School</li>
                    </ul> */}
                </nav>
                <div className="storage">
                    {/* <FaHdd /> <span>Storage 43%</span> */}
                    <button className="upgrade-btn">Logout</button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="dashboard-content">
                <header>
                    <h1>Dashboard</h1>
                    <input type="text" placeholder="Search here..." />
                    <div className="profile"></div>
                </header>

                {/* Storage Overview */}
                <section className="storage-overview">
                    <div className="card">📂 Images</div>
                    <div className="card">🎥 Videos</div>
                    <div className="card">🎵 Music</div>
                    <div className="card">📄 Documents</div>
                </section>

                {/* Welcome Section */}
                {/* <section className="welcome">
                    <div className="card">📖 Teacher’s Guide</div>
                    <div className="card">📚 Lesson Plans</div>
                    <div className="card">🏫 Classroom Scene</div>
                    <div className="card">🌍 Educational Video</div>
                </section> */}

                {/* Task Tracker */}
                <section className="task-tracker">
                    <table>
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Size</th>
                                <th>Access</th>
                                <th>Last Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>📕 Teacher’s Handbook</td>
                                <td>9.25 MB</td>
                                <td>Public</td>
                                <td>24/08/2023</td>
                            </tr>
                            <tr>
                                <td>🎙️ Educational Podcast</td>
                                <td>2.19 MB</td>
                                <td>Private</td>
                                <td>24/08/2023</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
