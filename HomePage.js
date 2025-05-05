import React, { useEffect, useState } from "react";
import "./HomePage.css";


function HomePage() {
  const roles = [
    "Web Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "Graphic Designer",
  ];
  const [animatedText, setAnimatedText] = useState(roles[0]);
  const [infoContent, setInfoContent] = useState("services");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setAnimatedText(roles[index]);
      index = (index + 1) % roles.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const showContent = (contentId) => {
    setInfoContent(contentId);
  };

  return (
    <>
      <nav className="sidebar">
        <div className="logo">
          <span>D</span>ilmini
        </div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-left">
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              fontFamily: "Arial, Helvetica, sans-serif",
              margin: 0,
              color: "white",
             
            }}
          >
            Hi, I'm Dilmini Shyawindi
          </h1>
          <p>{animatedText}</p>
          <div className="follow">
            Follow me on:
            <a
              href="https://www.linkedin.com/in/dilmini-senevirathne-123456789/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100090153744486"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>

        <div
          className="hero-right"
          style={{
            backgroundImage:
              "url('WhatsApp Image 2025-04-22 at 09.21.41_b44ce6ea.jpg')",
          }}
        ></div>
      </section>

      <section id="about">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            padding: "15px",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "40px"}}>Who am I?</h2>
        </div>

        <div className="about-content">
          <p>
            <br />
            <br />
            My name is R.M.Dilmini Shyawindi Senevirathne. I am an undergraduate
            at the Institute of Technology, University Of Moratuwa. I am a
            passionate web developer with a strong interest in creating
            user-friendly and visually appealing websites. I have experience in
            HTML, CSS, JavaScript, and various web development frameworks. I am
            always eager to learn new technologies and improve my skills. I enjoy
            working on projects that challenge me and allow me to express my
            creativity. I believe in the power of technology to make a positive
            impact on people's lives, and I strive to contribute to that vision
            through my work.
          </p>
        </div>

        <div className="about-buttons">
          <button className="btn blue" onClick={() => showContent("services")}>
            Services
          </button>
          <button className="btn blue" onClick={() => showContent("education")}>
            Education
          </button>
          <button className="btn blue" onClick={() => showContent("projects")}>
            Projects
          </button>
        </div>

        <div className="info-box">
          <div
            id="services"
            className={`info-content services-grid ${
              infoContent === "services" ? "" : "hidden"
            }`}
          >
            <br />
            <div className="service-box">Web Design</div>
            <div className="service-box">Frontend Development</div>
            <div className="service-box">UI/UX Design</div>
            <div className="service-box">Graphic Design</div>
          </div>

          <div
            id="education"
            className={`info-content ${
              infoContent === "education" ? "" : "hidden"
            }`}
            style={{
              width: "300px",
              textAlign: "justify",
              margin: "20px",
              color: "gray",
            }}
          >
            I completed my G.C.E O/L in 2018 with 9A passes and G.C.E. A/L with
            2B passes and 1C pass in 2021. I'm currently an undergraduate at the
            Institute of Technology, University of Moratuwa, studying Information
            Technology.
          </div>

          <div
            id="projects"
            className={`info-content ${
              infoContent === "projects" ? "" : "hidden"
            }`}
            style={{ margin: "20px", color: "gray" }}
          >
            <br /> <strong>My Projects</strong>
            <div className="project-gallery">
              <div className="project-card">
                <img
                  src="https://img.freepik.com/free-vector/books-online-library-isometric-3d-flat-concept-internet-knowledge-web-online-study-technology-computer-screen_1284-41289.jpg"
                  alt="Project 1"
                />
                <p>Library Management System</p>
              </div>
              <div className="project-card">
                <img
                  src="https://img.freepik.com/free-vector/business-people-working-control-center-with-big-screens-flat-illustration_74855-10493.jpg"
                  alt="Project 2"
                />
                <p>Conference Management System</p>
              </div>
              <div className="project-card">
                <img
                  src="https://img.freepik.com/premium-photo/warehouse-management-innovative-software-computer-real-time-monitoring_31965-18617.jpg"
                  alt="Project 3"
                />
                <p>Inventory Management System</p>
              </div>
              <div className="project-card">
                <img
                  src="https://img.freepik.com/free-vector/flat-customer-service-week-illustration_23-2149644204.jpg"
                  alt="Project 4"
                />
                <p>Service Selling and Buying System</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        style={{ padding: "4rem 2rem", backgroundColor: "rgb(1, 1, 49)", color: "white" }}
      >
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            padding: "15px",
            fontSize: "40px",
          }}
        >
          Skills & Technologies
        </h2>
        <div className="skills-container">
          <div className="skill-card">
            <h3>Programming Languages</h3>
            <ul>
              <li><i className="fas fa-js" style={{ color: "white" }}></i> JavaScript</li>
              <div className="progress">
                 <div style={{ width: "60%" }} data-percent="60"></div>
              </div>
              <br/>

              <li><i className="fas fa-python" style={{ color: "white" }}></i> Python</li>
              <div className="progress">
                 <div style={{ width: "60%" }} data-percent="60"></div>
              </div>
              <br/>

              <li><i className="fas fa-code" style={{ color: "white" }}></i> Java</li>
              <div className="progress">
                 <div style={{ width: "70%" }} data-percent="70"></div>
              </div>
              <br/>

            </ul>
          </div>
          <div className="skill-card">
            <h3>Web Development</h3>
            <ul>
              <li><i className="fab fa-html5" style={{ color: "white" }}></i> HTML5</li>
              <div className="progress">
                 <div style={{ width: "90%" }} data-percent="90"></div>
              </div>
              <br/>

              <li><i className="fab fa-css3-alt" style={{ color: "white" }}></i> CSS</li>
              <div className="progress">
                 <div style={{ width: "80%" }} data-percent="80"></div>
              </div>
              <br/>

              <li><i className="fab fa-php" style={{ color: "white" }}></i> PHP</li>
              <div className="progress">
                 <div style={{ width: "70%" }} data-percent="70"></div>
              </div>
              <br/>

              <li><i className="fab fa-react" style={{ color: "white" }}></i> React</li>
              <div className="progress">
                 <div style={{ width: "70%" }} data-percent="70"></div>
              </div>
              <br/>

            </ul>
          </div>
          <div className="skill-card">
            <h3>Other Skills</h3>
            <ul>
              <li><i className="fas fa-users" style={{ color: "white" }}></i> Teamwork</li>
              <li><i className="fas fa-comments" style={{ color: "white" }}></i> Communication</li>
              <li><i className="fas fa-pencil-ruler" style={{ color: "white" }}></i> Graphic Design</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="contact"
        style={{
          padding: "4rem 2rem",
          backgroundColor: "#111",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <h2 style={{ fontSize: "40px" }}>Get in Touch</h2>
        </div><br/>
        <p>
          If you'd like to reach out, please fill out the form below:
        </p>
        <p style={{ color: "gray" }}>
          I am open to any kind of work. If you have any questions or want to
          work with me, please feel free to contact me.<br/><br/>
        </p>
        <div style={{ overflowX: "auto" }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfhn2hIxLpu4FHz8J6BVgl8GB4BPRx7lA3ScWoO89Pgayps7Q/viewform?embedded=true"
            width="500"
            height="500"
            title="Contact Form"
          >
            Loading…
          </iframe>
        </div>
      </section>

      <footer
        style={{
          backgroundColor: "rgb(1, 1, 49)",
          color: "white",
          textAlign: "center",
          padding: "10px",
          borderTop: "1px solid #222",
        }}
      >
        <p>
          <i className="fas fa-envelope" style={{ color: "white" }}></i> Contact
          me at:{" "}
          <a
            href="mailto:dilminishyavindi@gmail.com"
            style={{ color: "red", textDecoration: "none" }}
          >
            dilminishyavindi@gmail.com
          </a>
        </p>
        <p>
          <i className="fas fa-phone" style={{ color: "white" }}></i> Phone: +94
          71 017 0601
        </p>
        <div>
          <a
            href="https://github.com/Dilmini1027"
            target="_blank"
            style={{ color: "red", margin: "0 10px" }}
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/dilmini-senevirathne-123456789/"
            target="_blank"
            style={{ color: "blue", margin: "0 10px" }}
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://facebook.com/profile.php?id=100090153744486"
            target="_blank"
            style={{ color: "purple", margin: "0 10px" }}
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Dilmini Shyawindi. All rights reserved.</p>
      </footer>
    </>
  );
}

export default HomePage;
