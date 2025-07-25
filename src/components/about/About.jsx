import React from "react";
import "./About.css";
import { FaMale, FaFemale } from "react-icons/fa";

const directory = [
  {
    name: "Ahmed Salad N.",
    role: "Board of Director",
    gender: "male",
    reportsTo: null,
  },
  {
    name: "Ahmed A. Ahmed",
    role: "Executive Director",
    gender: "male",
    reportsTo: "Ahmed Salad N.",
  },
  {
    name: "Abdirahman Mohamed Hussein",
    role: "Chairman",
    gender: "male",
    reportsTo: "Ahmed A. Ahmed",
  },
  {
    name: "Abdirizack Ahmed Salad",
    role: "Finance & Admin Manager",
    gender: "male",
    reportsTo: "Abdirahman Mohamed Hussein",
  },
  {
    name: "Abdirisaq Somane Garan",
    role: "Secretary",
    gender: "male",
    reportsTo: "Abdirahman Mohamed Hussein",
  },
  {
    name: "Leila Aden Dabar",
    role: "Assistant",
    gender: "female",
    reportsTo: "Abdirizack Ahmed Salad",
  },
  {
    name: "Ahmed Hassan Jama",
    role: "Program Manager",
    gender: "male",
    reportsTo: "Abdirisaq Somane Garan",
  },
  {
    name: "Shamsa Mohamud",
    role: "Logistic & Supply Chain Manager",
    gender: "female",
    reportsTo: "Abdirisaq Somane Garan",
  },
  {
    name: "Mahad Abdisalam",
    role: "Head of Communication",
    gender: "male",
    reportsTo: "Abdirisaq Somane Garan",
  },
  {
    name: "Abdi Omar Abdullahi",
    role: "HR Manager",
    gender: "male",
    reportsTo: "Abdirisaq Somane Garan",
  },
  {
    name: "Maryan Ali Garad",
    role: "Program Officer",
    gender: "female",
    reportsTo: "Ahmed Hassan Jama",
  },
  {
    name: "Mohamed Bare",
    role: "Logistic Assistant",
    gender: "male",
    reportsTo: "Shamsa Mohamud",
  },
  {
    name: "Faiza D. Abdullahi",
    role: "Communication Assistant",
    gender: "female",
    reportsTo: "Mahad Abdisalam",
  },
  {
    name: "Mohamed Adan Jibril",
    role: "HR Officer",
    gender: "male",
    reportsTo: "Abdi Omar Abdullahi",
  },
];

function renderHierarchy(parentName) {
  const children = directory.filter(
    (person) => person.reportsTo === parentName
  );
  if (!children.length) return null;

  return (
    <ul className="org-children">
      {children.map((child) => (
        <li key={child.name} className="org-node">
          <div className="person-box">
            {child.gender === "male" ? (
              <FaMale className="icon-male" />
            ) : (
              <FaFemale className="icon-female" />
            )}
            <div className="person-info">
              <strong>{child.name}</strong>
              <p>{child.role}</p>
            </div>
          </div>

          {directory.some((p) => p.reportsTo === child.name) && (
            <div className="vertical-connector" />
          )}
          {renderHierarchy(child.name)}
        </li>
      ))}
    </ul>
  );
}

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-header">
          <h2>Who We Are</h2>
          <p>
            Leading Somalia's fight against climate change through innovative solutions, 
            community empowerment, and sustainable development initiatives.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-section">
              <h3>Our Mission</h3>
              <p>
                Sareedo Community Development Organization (SCDO) is an independent, nonprofit organization 
                dedicated to building climate resilience across Somalia. We empower vulnerable communities 
                through expert project management, research, and development solutions focused on climate 
                adaptation, sustainable livelihoods, and environmental protection.
              </p>
            </div>

            <div className="about-section">
              <h3>What We Do</h3>
              <ul>
                <li><strong>Climate-Resilient Development:</strong> Comprehensive programs building community resilience against climate impacts through drought-resistant agriculture and sustainable alternatives.</li>
                <li><strong>Environmental Research:</strong> In-depth studies on climate adaptation strategies and community-based solutions for policy advocacy.</li>
                <li><strong>Community Education:</strong> Climate awareness campaigns and training workshops on sustainable practices.</li>
                <li><strong>Strategic Partnerships:</strong> Collaborating with international organizations to scale climate solutions across Somalia.</li>
              </ul>
            </div>
          </div>

          <div className="about-visual">
            <div className="impact-stats">
              <h3>Our Impact</h3>
              <div className="stats-grid">
                <div className="stat-card">
                  <h4>50+</h4>
                  <p>Communities Served</p>
                </div>
                <div className="stat-card">
                  <h4>15K+</h4>
                  <p>Lives Impacted</p>
                </div>
                <div className="stat-card">
                  <h4>25+</h4>
                  <p>Climate Projects</p>
                </div>
                <div className="stat-card">
                  <h4>8</h4>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h3>Our Strategic Focus Areas</h3>
          <ol>
            <li>
              <strong>Climate Adaptation & Resilient Livelihoods:</strong> Building climate-smart agricultural systems, 
              promoting drought-resistant crops, and developing alternative income sources for communities affected by 
              climate variability.
            </li>
            <li>
              <strong>Climate-Sensitive Social Protection:</strong> Developing early warning systems and emergency 
              response protocols for climate-related disasters, ensuring vulnerable populations have access to 
              climate-resilient services.
            </li>
            <li>
              <strong>Environmental Health & Sustainable Development:</strong> Promoting renewable energy solutions, 
              improving water resource management, and establishing climate-resilient infrastructure.
            </li>
            <li>
              <strong>Climate Governance & Policy:</strong> Advocating for inclusive climate policies and supporting 
              local governance structures in developing climate adaptation plans.
            </li>
            <li>
              <strong>Climate Research & Innovation:</strong> Conducting cutting-edge research on climate impacts, 
              adaptation technologies, and community-based solutions.
            </li>
          </ol>
        </div>

        <div className="mission-vision">
          <div className="mission-card">
            <h3>Our Vision</h3>
            <p>
              A climate-resilient Somalia where communities thrive despite environmental challenges, 
              with sustainable livelihoods and adaptive capacity to face future climate impacts.
            </p>
          </div>
          <div className="vision-card">
            <h3>Our Values</h3>
            <p>
              Sustainability, community empowerment, innovation, transparency, and collaborative 
              partnerships that drive meaningful climate action and environmental protection.
            </p>
          </div>
        </div>

        <div className="org-chart">
          <h2>SAREEDO Organization Chart</h2>
          {renderHierarchy(null)}
        </div>
      </div>
    </div>
  );
};

export default About;