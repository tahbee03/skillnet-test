import React from 'react';
import './About.css'; // Importing CSS file for styling
import aboutImage from '../../Images/about.jpg'; // Importing the about image
import defaultpp from '../../Images/default.png'; // Importing the default profile picture

const About = ({ isDarkMode }) => {
  return (
    <div className={isDarkMode ? "about-container dark-mode" : "about-container"}>
      <div className="about-image-container">
        <img src={aboutImage} alt="About Us" className="about-image" />
      </div>
      <div className="content-section">
        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
          SkillNet is a community-driven platform that connects individuals eager to learn new skills with those who are willing to teach. Whether you're a beginner looking to pick up a hobby or an expert wanting to share your knowledge, SkillNet makes it easy. Simply create a profile, list your skills, and discover potential matches in your local area. With features like in-app messaging and skill-sharing events, SkillNet brings people together to learn, teach, and grow in a collaborative environment.
          </p>
        </div>
        <div className="team-section">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className={isDarkMode ? "team-member dark-mode" : "team-member"}>
              <img src={defaultpp} alt="Myesha Mahazabeen" className="team-member-image" />
              <div className="team-member-info">
                <h3>Myesha Mahazabeen</h3>
                <p>Product Manager</p>
              </div>
            </div>
            <div className={isDarkMode ? "team-member dark-mode" : "team-member"}>
              <img src={defaultpp} alt="Najia Jahan" className="team-member-image" />
              <div className="team-member-info">
                <h3>Najia Jahan</h3>
                <p>Technical Program Manager</p>
              </div>
            </div>
            <div className={isDarkMode ? "team-member dark-mode" : "team-member"}>
              <img src={defaultpp} alt="Talike Bennett" className="team-member-image" />
              <div className="team-member-info">
                <h3>Talike Bennett</h3>
                <p>Test Engineer</p>
              </div>
            </div>
            <div className={isDarkMode ? "team-member dark-mode" : "team-member"}>
              <img src={defaultpp} alt="Eliza Berard" className="team-member-image" />
              <div className="team-member-info">
                <h3>Eliza Berard</h3>
                <p>Code Reviewer</p>
              </div>
            </div>
            <div className={isDarkMode ? "team-member dark-mode" : "team-member"}>
              <img src={defaultpp} alt="Aleika D Chery" className="team-member-image" />
              <div className="team-member-info">
                <h3>Aleika D Chery</h3>
                <p>DevOps Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
