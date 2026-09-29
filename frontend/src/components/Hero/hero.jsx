import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <h1 className="hero-title">
              Find Your <span>Dream Job</span>
            </h1>

            <p className="hero-subtitle">
              Search thousands of jobs from top companies and start your career today.
            </p>

            <div className="search-box shadow">

              <input
                type="text"
                className="form-control"
                placeholder="Job title, skill or keyword"
              />

              <input
                type="text"
                className="form-control"
                placeholder="Location"
              />

              <button className="btn btn-primary">
                Search
              </button>

            </div>

            <div className="stats mt-5">

              <div>
                <h3>10K+</h3>
                <p>Jobs</p>
              </div>

              <div>
                <h3>500+</h3>
                <p>Companies</p>
              </div>

              <div>
                <h3>50K+</h3>
                <p>Candidates</p>
              </div>

            </div>

          </div>

          <div className="col-lg-6 text-center">

            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900"
              alt="Job Portal"
              className="hero-image"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;