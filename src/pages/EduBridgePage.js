import React from "react";
import { useNavigate } from "react-router-dom"; // 👈 Add this
import "./EduBridgePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTasks,
  faChalkboardTeacher,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

const EduBridgePage = () => {
  const navigate = useNavigate();
  return (
    <div className="edubridge">
      {/* Landing Section */}
      <section className="landing-page">
        <div className="landing-container">
          <div className="content-wrapper">
            <div className="text-section">
              <h1 className="badge animate animate-delay-1">EduBridge</h1>
              <h2 className="heading animate animate-delay-2">
                The Real-Time Teachers' Forum
              </h2>
              <p className="description animate animate-delay-3">
                A dedicated space for teachers to manage tasks, organize
                teaching resources, track progress, and securely store important
                files—all in one place.
              </p>
              <button
                className="join-button animate animate-delay-4"
                onClick={() => navigate("/signup")}
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose EduBridge?</h2>
        <div className="cards-container">
          <div className="cards">
            <FontAwesomeIcon icon={faTasks} className="icon" />
            <h3>Task Tracker</h3>
            <p>
              Efficiently manage your tasks and stay organized with our
              intuitive task tracker.
            </p>
          </div>
          <div className="cards">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="icon" />
            <h3>Classroom Feature</h3>
            <p>
              Access all your class resources shared by teachers—organized,
              instant, and always available.
            </p>
          </div>

          <div className="cards">
            <FontAwesomeIcon icon={faShareAlt} className="icon" />
            <h3>Resource Sharing</h3>
            <p>
              Collaborate and share resources effortlessly with fellow
              educators.
            </p>
          </div>
        </div>

        <h2>FAQs</h2>
        <div className="faq-container">
          <div className="faq-box">
            <p>
              <strong>Q: How do I sign up?</strong>
              <br />
              A: Click on the “Join Now” button on the landing page to create
              your account.
            </p>
          </div>

          <div className="faq-box">
            <p>
              <strong>Q: How secure is my data on EduBridge?</strong>
              <br />
              A: We use industry-standard encryption and cloud storage to ensure
              your files and information are safe and accessible only to you.
            </p>
          </div>

          <div className="faq-box">
            <p>
              <strong>Q: Can students use EduBridge too?</strong>
              <br />
              A: Currently, EduBridge is designed specifically for educators.
              However, student features are planned for future updates.
            </p>
          </div>

          <div className="faq-box">
            <p>
              <strong>Q: How can I reset my password?</strong>
              <br />
              A: Click on “Forgot Password” on the login page, and follow the
              steps to reset it via email.
            </p>
          </div>

          <div className="faq-box">
            <p>
              <strong>Q: What kind of files can I upload to EduBridge?</strong>
              <br />
              A: You can upload documents (PDF, DOCX), spreadsheets, images,
              videos, and more.
            </p>
          </div>

          <div className="faq-box">
            <p>
              <strong>Q: Do I need technical skills to use EduBridge?</strong>
              <br />
              A: Not at all! EduBridge is designed to be intuitive and
              user-friendly, even for non-technical users.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <h3>EduBridge: The Real-Time Teachers' Forum</h3>
          <p>
            &copy; {new Date().getFullYear()} EduBridge. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EduBridgePage;
