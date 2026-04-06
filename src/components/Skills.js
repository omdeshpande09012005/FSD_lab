import { useState } from 'react';

function Skills() {
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript"]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  return (
    <section>
      <h2>Skills</h2>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <input
        type="text"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
        placeholder="Add new skill"
      />

      <button onClick={addSkill}>Add Skill</button>
    </section>
  );
}

export default Skills;