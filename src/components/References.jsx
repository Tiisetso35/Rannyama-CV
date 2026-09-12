function References({ references }) {
  return (
    <section id="references">
      <h2>References</h2>

      <div className="reference-grid">
        {references.map((ref, index) => (
          <div className="reference-card" key={index}>
            <h3>{ref.name}</h3>
            <p>{ref.position}</p>
            <p>{ref.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default References;