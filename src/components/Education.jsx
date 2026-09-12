function Education({ education }) {
  return (
    <section id="education">
      <h2>Education</h2>

      <h3>{education.institution}</h3>

      <p>{education.qualification}</p>

      <p>{education.year}</p>
    </section>
  );
}

export default Education;