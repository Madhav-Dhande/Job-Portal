import "./FeaturedJobs.css";

const jobs = [
  {
    id: 1,
    title: "Java Full Stack Developer",
    company: "TCS",
    location: "Pune",
    salary: "₹6 - ₹10 LPA",
  },
  {
    id: 2,
    title: "React Developer",
    company: "Infosys",
    location: "Bangalore",
    salary: "₹5 - ₹8 LPA",
  },
  {
    id: 3,
    title: "Spring Boot Developer",
    company: "Capgemini",
    location: "Hyderabad",
    salary: "₹7 - ₹12 LPA",
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "Wipro",
    location: "Mumbai",
    salary: "₹4 - ₹7 LPA",
  },
];

const FeaturedJobs = () => {
  return (
    <section className="featured py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2>Featured Jobs</h2>
          <p>Latest opportunities from top companies</p>
        </div>

        <div className="row">

          {jobs.map((job) => (
            <div className="col-md-6 col-lg-3 mb-4" key={job.id}>
              <div className="job-card shadow-sm">

                <h5>{job.title}</h5>

                <p><strong>{job.company}</strong></p>

                <p>{job.location}</p>

                <p className="salary">{job.salary}</p>

                <button className="btn btn-primary w-100">
                  Apply Now
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeaturedJobs;