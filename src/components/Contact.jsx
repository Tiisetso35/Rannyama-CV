import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
} from "react-icons/fa";

function Contact({ contact }) {
  return (
    <section id="contact">
      <h2>Contact</h2>

      <p>
        <FaEnvelope />{" "}
        <a href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
      </p>

      <p>
        <FaPhone />{" "}
        <a href={`tel:${contact.phone}`}>
          {contact.phone}
        </a>
      </p>

      <p>
        <FaMapMarkerAlt /> {contact.location}
      </p>

      <p>
        <FaGithub />{" "}
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </section>
  );
}

export default Contact;