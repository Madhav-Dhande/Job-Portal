import "./Register.css";

const Register = () => {
  return (
    <div className="register-page">
      <div className="register-card">

        <h2>Create Account</h2>

        <form>

          <div className="mb-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Role</label>

            <select className="form-select">

              <option>Candidate</option>

              <option>Employer</option>

            </select>

          </div>

          <button className="btn btn-success w-100">
            Register
          </button>

        </form>

      </div>
    </div>
  );
};

export default Register;