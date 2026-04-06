import { useState } from 'react';

function Projects() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section>
      <h2>Projects</h2>

      <p>Student Portfolio Management System</p>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "View Details"}
      </button>

      {showDetails && (
        <p>This project helps manage student portfolios with features like adding skills, projects, and personal details.</p>
      )}
    </section>
  );
}

export default Projects;