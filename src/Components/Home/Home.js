import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* SOCIAL MEDIA CONTENT */}
      <div className="socialmedia">
        <a
          href="https://www.linkedin.com/in/olivia-adongo-b87546195/"
          className="home_social-icon"
        >
          <i class="uil uil-linkedin"></i>
        </a>
        <a href="https://github.com/OliviaAdongo" className="home_social-icon">
          <i class="uil uil-github-alt"></i>
        </a>
        <a
          href="https://dribbble.com/Oliviaadongo"
          className="home_social-icon"
        >
          <i class="uil uil-dribbble"></i>
        </a>
      </div>
      {/* ABOUT ME CONTENT */}
      <div className="aboutinfo">
        <h1>Olivia Adongo</h1>
        <h3>Software developer</h3>
        <p>
          I am full-stack web developer, who is profecient in React, Ruby, and Javascript. lorem ipsum
          lorem ipsum lorem ipsum lorem{" "}
        </p>
      </div>
      {/* PROFILE PICTURE OR ANIMATED PICTURE */}
      <div className="profileimage">
        Right image
      </div>
    </div>
  );
}

export default Home;
