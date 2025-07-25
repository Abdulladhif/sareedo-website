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
                  <li><strong>Climate-Resilient Development Projects:</strong> We design and implement comprehensive programs that build community resilience against climate change impacts, focusing on drought-resistant agriculture, water conservation, and sustainable livelihood alternatives for vulnerable populations.</li>
                  <li><strong>Climate Research & Policy Advocacy:</strong> Our research team conducts in-depth studies on climate adaptation strategies, environmental degradation patterns, and community-based solutions. We advocate for evidence-based climate policies that protect Somalia's most vulnerable communities.</li>
                  <li><strong>Community Climate Education:</strong> We organize climate awareness campaigns, training workshops, and community forums to educate local populations about climate change impacts, adaptation strategies, and sustainable practices that can be implemented at the household and community level.</li>
                  <li><strong>Strategic Climate Partnerships:</strong> We collaborate with international climate organizations, UN agencies, and local environmental groups to leverage resources, share knowledge, and scale climate adaptation solutions across Somalia's diverse ecological zones.</li>
                </ul>
              </section>

              <section>
                <h3>Our Strategic Focus Areas</h3>
                <ol>
                  <li>
                    <strong>Climate Adaptation & Resilient Livelihoods:</strong> Building climate-smart agricultural systems, promoting drought-resistant crops, and developing alternative income sources for communities affected by climate variability. We focus on enhancing food security through sustainable farming practices and water-efficient technologies.
                  </li>
                  <li>
                    <strong>Climate-Sensitive Social Protection:</strong> Developing early warning systems and emergency response protocols for climate-related disasters. We ensure vulnerable populations, especially women and children, have access to climate-resilient shelters, clean water, and healthcare services during extreme weather events.
                  </li>
                  <li>
                    <strong>Environmental Health & Sustainable Development:</strong> Promoting renewable energy solutions, improving water resource management, and establishing climate-resilient infrastructure. We work to ensure communities have sustainable access to clean energy, water, and sanitation systems that can withstand climate impacts.
                  </li>
                  <li>
                    <strong>Climate Governance & Policy:</strong> Advocating for inclusive climate policies and supporting local governance structures in developing climate adaptation plans. We strengthen community participation in environmental decision-making and promote transparent resource management for climate resilience.
                  </li>
                  <li>
                    <strong>Climate Research & Innovation:</strong> Conducting cutting-edge research on climate impacts, adaptation technologies, and community-based solutions. We develop innovative approaches to climate challenges and foster knowledge exchange between communities, researchers, and policymakers to scale effective climate solutions.
                  </li>
                </ol>
              </section>   

      <h2>SAREEDO Organization Chart</h2>
      {renderHierarchy(null)}
    </div>
  );
};

export default About;
