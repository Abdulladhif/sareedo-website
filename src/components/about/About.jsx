import React from "react";
import "./About.css";
import { FaMale, FaFemale } from "react-icons/fa";

// Paste the final `directory` array above or here

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
