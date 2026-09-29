import "./TopCompanies.css";

const companies = [
  {
    id: 1,
    name: "TCS",
    jobs: 120,
    logo: "https://logo.clearbit.com/tcs.com"
  },
  {
    id: 2,
    name: "Infosys",
    jobs: 85,
    logo: "https://logo.clearbit.com/infosys.com"
  },
  {
    id: 3,
    name: "Capgemini",
    jobs: 95,
    logo: "https://logo.clearbit.com/capgemini.com"
  },
  {
    id: 4,
    name: "Wipro",
    jobs: 70,
    logo: "https://logo.clearbit.com/wipro.com"
  }
];

const TopCompanies = () => {
  return (
    <section className="companies-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2>Top Companies</h2>
          <p>Find opportunities from trusted employers</p>
        </div>

        <div className="row">

          {companies.map((company) => (
            <div className="col-md-3 mb-4" key={company.id}>
              <div className="company-card shadow-sm">

                <img
                  src={company.logo}
                  alt={company.name}
                />

                <h5>{company.name}</h5>

                <p>{company.jobs} Open Jobs</p>

                <button className="btn btn-outline-primary">
                  View Jobs
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TopCompanies;