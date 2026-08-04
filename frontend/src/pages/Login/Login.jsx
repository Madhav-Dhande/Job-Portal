import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">

        <h2>Login</h2>

        <form>

          <div className="mb-3">
            <label>Email</label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label>Password</label>

            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <button className="btn btn-primary w-100">
            Login
          </button>

        </form>

      </div>
    </div>
  );
};

export default Login;