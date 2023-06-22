import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <div></div>

          <div className="d-flex justify-content-around w-25" >
            <Link className="nav-link" to="/">
              Home
            </Link>

            <Link className="nav-link" to="/login">
              Login
            </Link>

            <Link className="nav-link" to="/sign-up">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
      
      <div className="container p-5">
        <div className="row justify-content-center p-5">
          <div className="col-4">
          <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;