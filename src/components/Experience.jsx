function Experience({ experience }) {
  return (
    <section id="experience">
      <h2>Experience</h2>

      {experience.map((job, index) => (
        <div className="experience-card" key={index}>
          <h3>{job.position}</h3>

          <h4>{job.organization}</h4>

          <span>{job.duration}</span>

          <ul>
            {job.responsibilities.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;