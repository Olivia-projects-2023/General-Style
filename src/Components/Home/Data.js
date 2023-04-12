import './Home.css'

function Data() {
  return (
    <div className="home_data">
      <h1 className="home_title">
      OLIVIA     
      {/* emoji ??? */}
      </h1>
      <h3 className="home_subtitle"> Designer & Developer</h3>
      <p className="home_description">
        I am a UI/UX designer and a fullstack developer.{" "}
      </p>
      <a href="#contact" className="button button--flex">
        GET IN TOUCH  
        {/* ICON ??? */}
        <i class="uil uil-message"></i>
      </a>
      
    </div>
  );
}

export default Data;
