function Skills({ skills }) {
  return (
    <section id="skills">

      <h2>Technical Skills</h2>

      <div className="skill-grid">

        {skills.map((skill,index)=>(

          <div className="skill-card" key={index}>

            {skill}

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;