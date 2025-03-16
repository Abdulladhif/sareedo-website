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
      {/* Intro paragraphs above the chart */}
      <p>
        Sareedo Community Development Organization (SCDO) is a non-partisan,
        non-governmental, and non-profit humanitarian and development organization.
        Established on October 21st, 2007, SCDO was founded by community elders,
        agricultural experts, environmental health specialists, and development
        activists to provide essential services and improve livelihoods.
      </p>
      <p>
        Our mission is to support vulnerable communities by implementing
        sustainable development initiatives that reduce poverty, enhance education,
        promote peace, and build resilience against humanitarian crises. We focus
        on the most affected populations, including internally displaced persons
        (IDPs), women, children, and farmers.
      </p>

      <h2>SAREEDO Organization Chart</h2>
      {renderHierarchy(null)}
    </div>
  );
};

export default About;
