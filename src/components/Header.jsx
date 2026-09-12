import profile from "../assets/profile.jpeg";
import { FaGithub, FaEnvelope } from "react-icons/fa";

function Header({ name, title }) {
  return (
    <>
      <header className="hero">
        <img
          src={profile}
          alt="Tiisetso Rannyama"
          className="profile-image"
        />

        <div className="hero-text">
          <h1>{name}</h1>

          <h3>{title}</h3>

          <p>
            Passionate Software Engineering student focused on
            building modern web applications using React,
            JavaScript and Java.
          </p>

          <div className="socials">
            <a
              href="https://github.com/tiisetso35"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:tiisetsorannya@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </header>

      <nav className="navbar">
        <a href="#profile">Profile</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#references">References</a>
        <a href="#contact">Contact</a>
      </nav>
    </>
  );
}

export default Header;