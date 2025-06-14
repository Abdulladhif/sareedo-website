import React from "react";
import "./About.css";
import { FaMale, FaFemale } from "react-icons/fa";

// Paste the final `directory` array above or here
const directory = [
  // Top-level
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

  // Two direct subordinates under Abdirahman Mohamed Hussein
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

  // Leila under Abdirizack Ahmed Salad
  {
    name: "Leila Aden Dabar",
    role: "Assistant",
    gender: "female",
    reportsTo: "Abdirizack Ahmed Salad",
  },

  // Four direct subordinates under Abdirisaq Somane Garan
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

  // Subordinates of those four
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
  // Gather direct children
  const children = directory.filter(
    (person) => person.reportsTo === parentName
  );
  if (!children.length) return null;

  return (
    <ul className="org-children">
      {children.map((child) => (
        <li key={child.name} className="org-node">
          {/* Person Box */}
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

          {/* If this person has subordinates, show vertical connector + recursion */}
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
      <div className="heading-container">
        <h2>Who are We</h2>
        <div className="line"></div>
      </div> 
      {/* Intro paragraphs above the chart */}
           <section>
                <p>
                  Sareedo Community Development Organization (SCDO) is an independent, nonprofit, and non-governmental organization dedicated to improving the lives of vulnerable communities across Somalia. We provide expert project management, research, and development solutions in key focus areas such as livelihoods, economic inclusion, climate change, social development, protection, and good governance.
                  Founded by a team of multi-disciplinary Somali experts, SCDO delivers insightful and objective analysis on a wide range of social issues including conflict dynamics, peacebuilding, drought response, and resilience strategies—particularly for youth, women, internally displaced persons (IDPs), and impoverished rural communities.
                </p>
              </section>

              <section>
                <h3>What We Do</h3>
                <ul>
                  <li><strong>Design & Implement Development Projects:</strong> We manage humanitarian and development programs that support both rural and urban vulnerable groups.</li>
                  <li><strong>Research & Policy Advocacy:</strong> Our dedicated research department investigates topics including governance, democracy, agricultural practices, climate change, and water technology to influence policy and guide humanitarian action.</li>
                  <li><strong>Public Forums & Debates:</strong> We organize community discussions, forums, and conferences bringing together activists, media, academics, and policymakers to seek sustainable, locally-driven solutions to pressing social challenges.</li>
                  <li><strong>Partnerships:</strong> We collaborate with international NGOs, UN agencies, and local institutions to design, implement, and scale impact-driven programs that align with community needs and national priorities.</li>
                </ul>
              </section>

              <section>
                <h3>Our Strategic Focus Areas</h3>
                <ol>
                  <li>
                    <strong>Livelihoods, Climate Change & Economic Inclusion:</strong> Enhancing food security, resilience, and economic participation for IDPs, vulnerable households, and climate-affected communities through innovation and sustainable solutions.
                  </li>
                  <li>
                    <strong>Social Protection:</strong> Ensuring women and children have access to safe, timely, and effective services while raising awareness on gender-based violence, reproductive health, and child protection.
                  </li>
                  <li>
                    <strong>Social Development:</strong> Improving equitable access to quality healthcare, education, clean water, and sanitation services, while contributing to Somali human capital development.
                  </li>
                  <li>
                    <strong>Good Governance & Democracy:</strong> Strengthening trust between citizens and government by supporting inclusive political structures, local governance, federalism, and democratic values.
                  </li>
                  <li>
                    <strong>Research & Development:</strong> Conducting high-impact research to inform policy and humanitarian programs and fostering partnerships with local and international research institutions to exchange knowledge.
                  </li>
                </ol>
              </section>   

      <h2>SAREEDO Organization Chart</h2>
      {renderHierarchy(null)}
    </div>
  );
};

export default About;
